import React, { useState, useEffect } from 'react';
import { Brain, TrendingUp, AlertTriangle } from 'lucide-react';
import * as tf from '@tensorflow/tfjs';

interface PrioritizationMetrics {
  urgencyScore: number;
  predictedNeed: number;
  contextScore: number;
}

export function AIResourcePrioritization() {
  const [metrics, setMetrics] = useState<PrioritizationMetrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const analyzePriority = async () => {
      try {
        // Initialize TensorFlow model
        const model = await tf.sequential();

        // Add layers (simplified example)
        model.add(tf.layers.dense({ units: 3, inputShape: [3] }));
        model.add(tf.layers.dense({ units: 3, activation: 'sigmoid' }));

        // Mock input data - in production, this would come from your data sources
        const inputData = tf.tensor2d([[0.8, 0.6, 0.9]]); // Example features

        // Make prediction
        const prediction = model.predict(inputData) as tf.Tensor;
        const values = await prediction.data();

        setMetrics({
          urgencyScore: values[0],
          predictedNeed: values[1],
          contextScore: values[2],
        });
      } catch (error) {
        console.error('Error in AI analysis:', error);
      } finally {
        setLoading(false);
      }
    };

    analyzePriority();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-md animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex items-center gap-3 mb-6">
        <Brain className="h-6 w-6 text-indigo-600" />
        <h2 className="text-xl font-semibold">AI Resource Prioritization</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-indigo-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-indigo-600" />
            <h3 className="font-medium">Urgency Score</h3>
          </div>
          <p className="text-2xl font-bold text-indigo-600">
            {(metrics?.urgencyScore ?? 0 * 100).toFixed(1)}%
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Based on critical factors
          </p>
        </div>

        <div className="p-4 bg-green-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <h3 className="font-medium">Predicted Need</h3>
          </div>
          <p className="text-2xl font-bold text-green-600">
            {(metrics?.predictedNeed ?? 0 * 100).toFixed(1)}%
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Future resource requirement
          </p>
        </div>

        <div className="p-4 bg-purple-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="h-5 w-5 text-purple-600" />
            <h3 className="font-medium">Context Score</h3>
          </div>
          <p className="text-2xl font-bold text-purple-600">
            {(metrics?.contextScore ?? 0 * 100).toFixed(1)}%
          </p>
          <p className="text-sm text-gray-600 mt-1">Local context analysis</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <h3 className="font-medium text-yellow-800 mb-2">AI Recommendations</h3>
        <ul className="space-y-2 text-sm text-yellow-700">
          <li className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Prioritize infrastructure development based on urgency score
          </li>
          <li className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Prepare for increased resource needs in the next quarter
          </li>
          <li className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            Consider local socio-economic factors in allocation
          </li>
        </ul>
      </div>
    </div>
  );
}
