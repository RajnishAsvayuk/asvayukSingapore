const models = [
  {
    tag: "GPT-4 & LLMs",
    title: "GPT-4 & LLMs",
    desc: "Advanced language intelligence for complex reasoning, enterprise automation, and human-like customer dialogues.",
    color: "nlp",
  },
  {
    tag: "DALL·E & Generative Vision",
    title: "DALL·E & Generative Vision",
    desc: "AI-powered image synthesis and creative asset generation tailored for modern production use cases.",
    color: "vision",
    highlight: true,
  },
  {
    tag: "BERT (NLP)",
    title: "BERT (NLP)",
    desc: "Deep contextual language understanding for precise intent recognition and semantic data analysis.",
    color: "nlp",
  },
  {
    tag: "Vision",
    title: "Stable Diffusion",
    desc: "Industrial-grade visual generation from text prompts, ideal for rapid prototyping and marketing automation.",
    color: "vision",
  },
  {
    tag: "Vision",
    title: "YOLO (You Only Look Once)",
    desc: "Real-time object detection and computer vision systems for smart logistics and security.",
    color: "vision",
  },
  {
    tag: "Audio",
    title: "Whisper AI",
    desc: "High-accuracy, multilingual speech recognition and transcription, perfect for Singapore's diverse linguistic environment.",
    color: "audio",
  },
  {
    tag: "Multimodal",
    title: "CLIP (Multimodal)",
    desc: "Advanced multimodal understanding that bridges the gap between textual descriptions and visual data.",
    color: "multimodal",
  },
  {
    tag: "Vision",
    title: "ResNet",
    desc: "High-performance neural networks for deep image classification and pattern recognition.",
    color: "vision",
  },
  {
    tag: "NLP",
    title: "Transformer Models",
    desc: "The core scalable architecture powering our most advanced NLP and sequence-to-sequence tasks.",
    color: "nlp",
  },
  {
    tag: "NLP",
    title: "T5 (Text-to-Text)",
    desc: "A unified framework for diverse language applications, from document summarisation to automated translation.",
    color: "nlp",
  },
];

export default function AdvancedAIModels() {
  return (
    <section className="ai-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="ai-title">High-Performance AI Frameworks & Architectures</h2>
          <p className="ai-subtitle">
            We leverage a world-class tech stack to build production-ready intelligence for the Singapore market.
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
