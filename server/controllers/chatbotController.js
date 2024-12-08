import { GoogleGenerativeAI } from '@google/generative-ai';
import PDFInteraction from '../models/PDFInteraction.js';
// import mongoose from 'mongoose';
import fs from 'fs';
import PdfParse from 'pdf-parse';
// Path to the static PDF file
const STATIC_PDF_PATH =
  'D:\\Synergy\\server\\controllers\\Framework_IISE _F.pdf';

// Controller to handle PDF-based chatbot interaction
export const askFromPDF = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ message: 'Question is required' });
    }

    const client = new GoogleGenerativeAI(
      'AIzaSyAUuOBsFY8zA_9fufowCUqQLxxYxPMdHeQ'
    );
    const model = client.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // const fileId = await client.uploadFile({ path: STATIC_PDF_PATH });
    // Read and parse the static PDF file
    const pdfBuffer = fs.readFileSync(STATIC_PDF_PATH);
    const pdfData = await PdfParse(pdfBuffer);
    const pdfText = pdfData.text;

    // Generate response
    const prompt = `Document Text: ${pdfText}\n\nQuestion: ${question}`;
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    let cleanedResponse = responseText
      .replace(/```json\n?/g, '')
      .replace(/```\n?/g, '')
      .replace(/[\u200B-\u200D\uFEFF]/g, '')
      .replace(/\*\*/g, '')
      .replace(/\*/g, '')
      .replace(/^[^[{]*/, '')
      .replace(/[^}\]]*$/, '')
      .trim();

    console.log('Response:', cleanedResponse);
    // Save the interaction to the database
    const interaction = await PDFInteraction.create({
      // fileId,
      question,
      response: cleanedResponse,
    });

    res.json({
      question,
      response: cleanedResponse,
      interactionId: interaction._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteOldInteractions = async () => {
  try {
    const cutoffTime = new Date(Date.now() - 24 * 60 * 60 * 1000);
    await PDFInteraction.deleteMany({ createdAt: { $lt: cutoffTime } });
  } catch (error) {
    console.error('Error deleting old interactions:', error.message);
  }
};
