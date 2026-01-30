const models = [
  {
    tag: "NLP",
    title: "GPT-4",
    desc: "Advanced language intelligence for reasoning, automation, and human-like conversations",
    color: "nlp",
  },
  {
    tag: "Vision",
    title: "DALL·E",
    desc: "AI-powered image generation for creative and production use cases",
    color: "vision",
    highlight: true,
  },
  {
    tag: "NLP",
    title: "BERT",
    desc: "Deep contextual language understanding for intent and semantic analysis",
    color: "nlp",
  },
  {
    tag: "Vision",
    title: "Stable Diffusion",
    desc: "High-quality image generation from text prompts",
    color: "vision",
  },
  {
    tag: "Vision",
    title: "YOLO",
    desc: "Real-time object detection for intelligent vision systems",
    color: "vision",
  },
  {
    tag: "Audio",
    title: "Whisper",
    desc: "Accurate, multilingual speech recognition and transcription",
    color: "audio",
  },
  {
    tag: "Multimodal",
    title: "CLIP",
    desc: "Multimodal understanding connecting text and images",
    color: "multimodal",
  },
  {
    tag: "Vision",
    title: "ResNet",
    desc: "High-performance image classification using deep neural networks",
    color: "vision",
  },
  {
    tag: "NLP",
    title: "Transformer Models",
    desc: "Core architecture powering scalable NLP and sequence tasks",
    color: "nlp",
  },
  {
    tag: "NLP",
    title: "T5",
    desc: "Unified text-to-text model for diverse language applications",
    color: "nlp",
  },
];

export default function AdvancedAIModels() {
  return (
    <section className="ai-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="ai-title">Advanced AI Models We Leverage</h2>
          <p className="ai-subtitle">
            Powering intelligent solutions with cutting-edge machine learning and deep learning technologies
          </p>
        </div>

        <div className="row g-4">
          {models.map((model, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className={`ai-card ${model.highlight ? "active" : ""}`}>
                <span className={`ai-tag ${model.color}`}>{model.tag}</span>
                <h5>{model.title}</h5>
                <p>{model.desc}</p>

                <div className="ai-status">
                  <span className="dot"></span>
                  Production Ready
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
