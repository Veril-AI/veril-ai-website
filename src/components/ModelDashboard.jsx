import React, { useState } from 'react';
import { Upload, AlertCircle, CheckCircle, Loader, FileText, Brain, Settings, X, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModelDashboard = () => {
  const [activeModel, setActiveModel] = useState(null);
  const [loading, setLoading] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = {
    bias: {
      icon: Brain,
      color: 'text-purple-500',
      title: 'Bias Detection'
    },
    safety: {
      icon: Shield,
      color: 'text-blue-500',
      title: 'Safety Analysis'
    },
    transparency: {
      icon: FileText,
      color: 'text-orange-500',
      title: 'Transparency Check'
    },
    accuracy: {
      icon: CheckCircle,
      color: 'text-green-500',
      title: 'Accuracy Metrics'
    }
  };

  // Analysis results generator with meaningful content
  const generateAnalysisResults = () => {
    const categoryContent = {
      bias: {
        issues: [
          "Gender representation skew in language generation",
          "Age-based bias in decision outcomes",
          "Geographical bias in service recommendations"
        ],
        recommendations: [
          "Implement demographic parity in training data",
          "Add fairness constraints to model optimization",
          "Introduce bias detection metrics in evaluation pipeline",
          "Diversify training data sources"
        ]
      },
      safety: {
        issues: [
          "Potential for generating misleading information",
          "Vulnerability to prompt injection attacks",
          "Insufficient content filtering mechanisms"
        ],
        recommendations: [
          "Implement robust content filtering system",
          "Add input validation and sanitization",
          "Enhance output verification protocols",
          "Deploy real-time safety monitoring"
        ]
      },
      transparency: {
        issues: [
          "Limited explainability in decision-making process",
          "Insufficient model documentation",
          "Lack of feature importance visibility"
        ],
        recommendations: [
          "Implement SHAP values for feature interpretation",
          "Create detailed model architecture documentation",
          "Add confidence scores to model outputs",
          "Develop user-friendly explanation interfaces"
        ]
      },
      accuracy: {
        issues: [
          "Performance degradation on edge cases",
          "Inconsistent results across different demographics",
          "Lower accuracy on minority classes"
        ],
        recommendations: [
          "Expand test suite with edge cases",
          "Implement cross-validation across demographics",
          "Add ensemble methods for improved reliability",
          "Enhance data augmentation techniques"
        ]
      }
    };

    return Object.keys(categories).reduce((acc, category) => {
      const content = categoryContent[category];
      acc[category] = {
        score: Math.floor(Math.random() * 30) + 70,
        status: Math.random() > 0.5 ? 'success' : 'warning',
        issues: content.issues.slice(0, Math.floor(Math.random() * 2) + 1),
        recommendations: content.recommendations.slice(0, Math.floor(Math.random() * 2) + 2)
      };
      return acc;
    }, {});
  };

  const handleFileUpload = (event) => {
    event.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      const newFile = {
        name: `Model_${Math.random().toString(36).substr(2, 9)}`,
        timestamp: new Date().toISOString()
      };
      
      setUploadedFiles(prev => [...prev, newFile]);
      simulateAnalysis(newFile);
    }, 1500);
  };

  const simulateAnalysis = (file) => {
    setLoading(true);
    
    setTimeout(() => {
      const results = generateAnalysisResults();
      setAnalysisResults(results);
      setActiveModel(file);
      setLoading(false);
    }, 2000);
  };

  const handleRemoveFile = (file) => {
    setUploadedFiles(prev => prev.filter(f => f !== file));
    if (activeModel === file) {
      setActiveModel(null);
      setAnalysisResults(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Veril AI Model Analysis Dashboard</h1>
          <p className="mt-2 text-sm text-gray-600">Monitor and improve your AI model's ethical compliance</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Upload Section */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-6">
            <div 
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer"
              onClick={handleFileUpload}
            >
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">Upload your AI model</h3>
              <p className="mt-1 text-sm text-gray-500">Drag and drop your model files or click to browse</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                Select Files
              </button>
            </div>
          </div>
        </div>

        {/* Uploaded Files List */}
        {uploadedFiles.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Uploaded Models</h3>
            <div className="bg-white shadow-md rounded-lg divide-y divide-gray-200">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center">
                    <Brain className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{file.name}</p>
                      <p className="text-sm text-gray-500">
                        Uploaded {new Date(file.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => simulateAnalysis(file)}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      Analyze
                    </button>
                    <button
                      onClick={() => handleRemoveFile(file)}
                      className="text-sm text-red-600 hover:text-red-800"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <Loader className="h-8 w-8 animate-spin mx-auto text-blue-500" />
            <p className="mt-4 text-gray-600">Analyzing model...</p>
          </div>
        )}

        {/* Analysis Results */}
        {analysisResults && (
          <>
            {/* Category Filter */}
            <div className="mb-6 flex space-x-4">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  selectedCategory === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                All
              </button>
              {Object.entries(categories).map(([key, { title }]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedCategory === key 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {title}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {Object.entries(analysisResults)
                .filter(([key]) => selectedCategory === 'all' || key === selectedCategory)
                .map(([category, data]) => {
                  const CategoryIcon = categories[category].icon;
                  return (
                    <div key={category} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <CategoryIcon className={`h-6 w-6 ${categories[category].color} mr-2`} />
                            <h3 className="text-lg font-medium text-gray-900">{categories[category].title}</h3>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                              data.status === 'success' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              Score: {data.score}/100
                            </span>
                            <div className="w-32 mt-2 bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${
                                  data.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'
                                }`}
                                style={{ width: `${data.score}%` }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-500">Issues Identified:</h4>
                          <ul className="mt-2 space-y-2">
                            {data.issues.map((issue, index) => (
                              <li key={index} className="flex items-start">
                                <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{issue}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-500">Recommendations:</h4>
                          <ul className="mt-2 space-y-2">
                            {data.recommendations.map((rec, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{rec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
              })}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default ModelDashboard;