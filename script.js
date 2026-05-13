const results = [
  ["Random Baseline", "--", "50.0", "50.0"],
  ["GPT-4o", "16", "59.0", "47.0"],
  ["Gemini-2.5-Pro", "16", "57.0", "63.0"],
  ["InternVL3-8B", "16", "57.0", "50.0"],
  ["VideoLLaMA3-7B", "16", "57.0", "46.0"],
  ["Qwen2.5-VL-7B", "16", "60.0", "62.0"]
];

const cradleTranscript = [
  { text: "The video captures the classic mesmerizing motion of a Newton's Cradle. " },
  { text: "The action centers on the outer two balls ", wrong: true },
  { text: "while the three in the middle remain largely stationary. The ball on the far left swings down and strikes the stationary line of balls. " },
  {
    text:
      "Upon impact, the energy travels almost invisibly through the three middle balls, which barely move. The momentum is transferred to the ball on the far right, causing it to swing outward and upward to a height nearly equal to the first ball's release point. Gravity pulls the right ball back down to strike the group, reversing the flow of energy and sending the left ball swinging out again. ",
    wrong: true
  },
  {
    text: "This back-and-forth rhythmic cycle repeats continuously throughout the clip.",
    wrong: true
  }
];

const heroTranscript = [
  {
    text:
      "Video understanding should be grounded in what makes video unique: motion, state changes, and visual evidence unfolding across frames. "
  },
  {
    text:
      "This position paper argues that many recent Video LLM benchmarks can be solved through static visual cues or language priors, without requiring models to truly perceive spatiotemporal dynamics. "
  },
  {
    text:
      "We identify two recurring failure modes: static-cue dominance, where appearance and context override motion evidence, and prior-driven temporal hallucination, where models infer plausible but incorrect temporal or causal events. "
  },
  {
    text:
      "We synthesize recent diagnostic probes that expose these failure modes into a call to action for the community: to re-center video understanding on what a video uniquely contains, namely, dynamic evidence that unfolds over time, by enforcing spatiotemporal grounding in both models and benchmarks, before the pixel dynamics are lost in plain sight."
  }
];

const avoeSlides = [
  {
    question: "Does the right object change direction after the collision?",
    video: "site_videos/figure-3-row-1.mp4",
    note: "Ground truth: Yes. The right object reverses after contact.",
    answers: [
      { model: "ChatGPT", value: "No", correct: false },
      { model: "Gemini", value: "No", correct: false }
    ]
  },
  {
    question: "Does the right object change direction after the collision?",
    video: "site_videos/figure-3-row-2.mp4",
    note: "Ground truth: No. The trajectory keeps its direction.",
    answers: [
      { model: "ChatGPT", value: "Yes", correct: false },
      { model: "Gemini", value: "Yes", correct: false }
    ]
  },
  {
    question: "Does the left object change direction after the collision?",
    video: "site_videos/figure-3-row-3.mp4",
    note: "Ground truth: No. The left object does not reverse.",
    answers: [
      { model: "ChatGPT", value: "Yes", correct: false },
      { model: "Gemini", value: "Yes", correct: false }
    ]
  }
];

const teacupSlides = [
  {
    prompt:
      "Describe the complete sequence of motion and events in this video from start to finish. Focus specifically on the dynamics of the scene.",
    video: "site_videos/figure-4-top.mp4",
    model: "Gemini-2.5-Pro output",
    response: [
      { text: "...The teacup undergoes a full 360-degree axial rotation. " },
      { text: "The direction of the spin is counter-clockwise (when viewed from above).", wrong: true }
    ]
  },
  {
    prompt:
      "Describe the complete sequence of motion and events in this video from start to finish. Focus specifically on the dynamics of the scene.",
    video: "site_videos/figure-4-middle.mp4",
    model: "Gemini-2.5-Pro output",
    response: [
      { text: "...The primary motion is a steady, horizontal rotation of the teacup around its vertical center axis. " },
      { text: "The motion is counter-clockwise.", wrong: true }
    ]
  },
  {
    prompt:
      "Describe the complete sequence of motion and events in this video from start to finish. Focus specifically on the dynamics of the scene.",
    video: "site_videos/figure-4-bottom.mp4",
    model: "Gemini-2.5-Pro output",
    response: [
      { text: "...The teacup begins to rotate around its vertical central axis in a " },
      { text: "counter-clockwise direction (when viewed from above).", wrong: true }
    ]
  }
];

const syntheticSlides = [
  {
    prompt: "Explain the motion of the sphere in this video.",
    video: "site_videos/figure-5-top-left.mp4",
    model: "Gemini-2.5-Pro output",
    response: [
      {
        text:
          "...At the start, the platform is tilted downward toward the left. Gravity pulls the sphere, causing it to accelerate and roll from the top right corner down toward the bottom left edge. "
      },
      {
        text:
          "Just as the sphere reaches the lowest point on the left side, the platform tilts. The left side raises up and the right side drops down. Due to the new angle of the incline, the sphere slows down, stops momentarily, and then reverses direction. It begins rolling \"downhill\" toward the right side of the screen. Once the sphere reaches the right side, the platform tilts back to its original position...causing the ball to roll back to the left again.",
        wrong: true
      }
    ]
  },
  {
    prompt: "Describe the interaction of the two cubes.",
    video: "site_videos/figure-5-top-right.mp4",
    model: "Gemini-2.5-Pro output",
    response: [
      {
        text:
          "The video shows two cubes, a green one on the left and a red one on the right, sitting side-by-side on a gray surface. "
      },
      {
        text:
          "The green cube remains completely stationary throughout the entire clip. The red cube slides to the right, creating a gap between them, pauses for a moment, and then slides back to the left, returning to its original position touching the green cube.",
        wrong: true
      }
    ]
  },
  {
    prompt:
      "Analyze the video and describe the dynamics and motion of all objects present in the scene.",
    video: "site_videos/figure-5-bottom-left.mp4",
    model: "Gemini-2.5-Pro output",
    response: [
      { text: "...The left pendulum initiates the action, swinging inward to the right..." },
      {
        text:
          "As the left pendulum reaches the peak of its inward swing and begins to reverse direction, the stored energy in the compressed spring transfers to the right pendulum. The right pendulum begins to swing outward to the right. Consequently, the two objects move in opposite directions: the left bob travels further left, and the right bob travels further right, creating a mirroring effect.",
        wrong: true
      }
    ]
  },
  {
    prompt: "Describe the trajectory of the moving objects from beginning to end.",
    video: "site_videos/figure-5-bottom-right.mp4",
    model: "Gemini-2.5-Pro output",
    response: [
      { text: "The video captures the movement of two yellow tennis balls " },
      { text: "on a tilting wooden table", wrong: true },
      {
        text:
          ". Initially, the broken tennis ball is stationary at the left edge of the table, and a whole tennis ball is stationary at the right edge. "
      },
      {
        text:
          "As the table begins to tilt, the left ball rolls in a straight line horizontally to the right, moving inward towards the center. Concurrently, the right ball rolls in a straight line horizontally to the left, also moving inward towards the center. Both balls come to rest near the center of the table, positioned next to a gold bar and a soccer ball, without making contact with each other or reversing their direction.",
        wrong: true
      }
    ]
  }
];

const benchmarkEntries = [
  {
    benchmark: "TRoVe",
    category: "Static-cue dominance",
    probe: "Mines recurring static visual clusters in benchmark validation data and measures models' reliance on static features",
    blindSpot: "Models bypass temporal dynamics, predicting actions based on objects rather than motion.",
    citation: "Varma et al., 2025"
  },
  {
    benchmark: "Vinoground",
    category: "Static-cue dominance",
    probe: "Pairs natural videos with captions containing identical words but opposing temporal order.",
    blindSpot: "Models fail to distinguish events with identical static semantics but distinct timelines, indicating a collapse of temporal order into static co-occurrence",
    citation: "Zhang et al., 2024"
  },
  {
    benchmark: "MESH",
    category: "Static-cue dominance",
    probe: "QA designed with bottom-up cognitive path (setting → action) with distractors that are contextually plausible but visually absent.",
    blindSpot: "Models select context-consistent traps that fit scene context",
    citation: "Yang et al., 2025"
  },
  {
    benchmark: "UTD",
    category: "Static-cue dominance",
    probe: "De-biases benchmark QA by removing items solvable via single-frame objects/attributes.",
    blindSpot: "Model performance collapses on de-biased test splits, indicating that many performance gains come from appearance shortcuts, not temporal evidence use.",
    citation: "Shvetsova et al., 2025"
  },
  {
    benchmark: "TempCompass",
    category: "Static-cue dominance",
    probe: "Benchmark of video pairs sharing identical static content but differing in events and action over time.",
    blindSpot: "Perfomance drops on conflicting pairs reveal reliance on static semantics; models fail to distinguish events that look alike but move differently.",
    citation: "Liu et al., 2024"
  },
  {
    benchmark: "MotionBench",
    category: "Static-cue dominance",
    probe: "Curated questions explicitly targeting motion cues and temporal change rather than static recognition.",
    blindSpot: "Models often capture scene semantics but fail on fine-grained motion understanding, indicating that dynamics are weakly represented relative to appearance cues.",
    citation: "Hong et al., 2025"
  },
  {
    benchmark: "FAVOR-Bench",
    category: "Static-cue dominance",
    probe: "Probes subtle motion properties (e.g., amplitude, frequency, manner).",
    blindSpot: "Models can name an action class yet fail on how it unfolds, indicating missing motion-level representations.",
    citation: "Tu et al., 2025"
  },
  {
    benchmark: "VideoHallucer",
    category: "Prior-driven temporal hallucination",
    probe: "Pairs positive (ground-truth) queries with negative (hallucinated) queries to test discrimination consistency.",
    blindSpot: "Models consistently affirm plausible but absent details, with more pronounced hallucinations in high-parameter models.",
    citation: "Li et al., 2025"
  },
  {
    benchmark: "UNSCENE",
    category: "Prior-driven temporal hallucination",
    probe: "Probes reliance on priors via incongruent action-scene pairs (e.g., boxing in a library) and actor-free scenes.",
    blindSpot: "Models rely on scene priors over pixel evidence, hallucinating actions from backgrounds.",
    citation: "Bae et al., 2025"
  },
  {
    benchmark: "CounterVid",
    category: "Prior-driven temporal hallucination",
    probe: "Synthesize AI-generated video pairs sharing identical start-frames (anchors) but diverging in action or temporal order",
    blindSpot: "Models hallucinate actions/orders based on scene associations.",
    citation: "Poppi et al., 2026"
  },
  {
    benchmark: "VideoHallu",
    category: "Prior-driven temporal hallucination",
    probe: "Synthesize AI-generated videos of impossible events, testing is models detect violations.",
    blindSpot: "Models fail to notice physics violations and answer based on how the world \"should\" work.",
    citation: "Li et al., 2025"
  },
  {
    benchmark: "VERHallu",
    category: "Prior-driven temporal hallucination",
    probe: "Tests causal, temporal, and subevent relations in videos that defy typical scripts.",
    blindSpot: "Models recognize isolated key events but hallucinate the links (cause/effect) between them based on scene context, failing to track actual dynamic transition.",
    citation: "Zhang et al., 2026"
  },
  {
    benchmark: "NOAH",
    category: "Prior-driven temporal hallucination",
    probe: "Inserts controlled event clips into videos at varying semantic similarities and positions to test robustness against narrative disruption.",
    blindSpot: "Models hallucinate transitions or omit incompatible events to force a coherent story.",
    citation: "Lee et al., 2025"
  },
  {
    benchmark: "MVP",
    category: "Coupled failure modes",
    probe: "Requires correct answers on paired videos with near-identical scenes but opposite temporal outcomes (e.g., open vs. close) to penalize guessing.",
    blindSpot: "Models fail to distinguish minimal temporal changes in videos with near-identical appearance; indicates missing representations of subtle trajectories.",
    citation: "Krojer et al., 2025"
  },
  {
    benchmark: "TVBench",
    category: "Coupled failure modes",
    probe: "Compares performance on normal, shuffled, and reversed videos.",
    blindSpot: "Negligible performance drops on shuffled inputs reveal that models and existing benchmarks treat videos as unordered \"bags of frames\", ignoring sequential dynamics.",
    citation: "Cores et al., 2025"
  },
  {
    benchmark: "VBenchComp",
    category: "Coupled failure modes",
    probe: "Categorizes existing benchmark QA into LLM-answerable and Semantic (shuffled-invariant) buckets to isolate true temporal dependencies",
    blindSpot: "Models often maintain performance even when frames are shuffled, revealing high benchmark scores stem from static cues and priors.",
    citation: "Feng et al., 2025"
  },
  {
    benchmark: "HERBench",
    category: "Coupled failure modes",
    probe: "Designs QA that demand \"high-evidential requirement\" across at least 3 frames in the video; uses oracle frames to disentangle retrieval failures.",
    blindSpot: "Models fail to aggregate dispersed cues over time; even when explicitly provided, revert to salient cues in a single frame.",
    citation: "Ben-Ami et al., 2025"
  },
  {
    benchmark: "REXTIME",
    category: "Coupled failure modes",
    probe: "QA-IoU metric enforces non-overlapping query/answer spans across distant segments.",
    blindSpot: "Performance drops when correct answers require linking separated events, exposing shallow temporal memory/credit assignment.",
    citation: "Chen et al., 2024"
  },
  {
    benchmark: "MHBench",
    category: "Coupled failure modes",
    probe: "Video triplets original vs. antonym vs. incomplete actions with shared objects; tests action existence and polarity.",
    blindSpot: "Models hallucinate actions from object presence, yielding temporally incorrect claims even when motion semantics are adversarial.",
    citation: "Kong et al., 2025"
  },
  {
    benchmark: "Dr.V-Bench",
    category: "Coupled failure modes",
    probe: "Evaluates perceptive, temporal, and cognitive hallucinations with fine-grained spatial-temporal grounding.",
    blindSpot: "Errors range from missed relations to fabricated temporal/cognitive explanations, motivating staged verification over raw generation.",
    citation: "Luo et al., 2025"
  }
];

const counterpoints = [
  {
    title:
      "Reliance on static semantics and world knowledge is not a failure but a rational and efficient design choice.",
    rail:
      "A strong efficiency argument grounded in predictiveness, canonical objects, and sparse informative frames.",
    summary:
      "Many real-world video understanding tasks are strongly predictable from appearance, object identity, and scene context alone. We agree that actions correlate tightly with canonical objects, viewpoints, and affordances.",
    agree:
      "From this perspective, treating video as a sparse set of informative frames is an effective approximation: it reduces computational cost, simplifies training, and exploits strong statistical regularities. If the goal is to answer \"what is happening?\" in the average case, static cues often suffice.",
    response:
      "Our position is not that models should ignore appearance, nor that priors are inherently harmful. Rather, we argue that predictiveness should not be conflated with understanding.",
    details: [
      {
        heading: "Failure boundary",
        body:
          "Appearance-based shortcuts fail catastrophically in counterintuitive scenarios, from real-world safety anomalies such as a car reversing unexpectedly to AI-generated hallucinations that defy physics."
      },
      {
        heading: "Paper stance",
        body:
          "We do not reject the efficiency-oriented view; we delimit it. Static cues are a powerful first approximation. However, a system that cannot reliably abandon those shortcuts when they become misleading is not truly video-aware."
      }
    ]
  },
  {
    title:
      "If the LLM paradigm inherently biases models away from dynamics, we should drop the language backbone and revert to video-native architectures.",
    rail:
      "A principled response to dynamic information loss would be to remove the language backbone entirely.",
    summary:
      "If the introduction of an LLM into video understanding models induces dynamic information loss, then the principled response is to remove the language backbone and revert to video-native architectures optimized for temporal credit assignment.",
    agree:
      "The concern is real: current pipelines often allow language priors to dominate when spatiotemporal evidence is underspecified, yielding plausible answers without enforcing state tracking.",
    response:
      "We reject this as a false dichotomy. Our claim is not that LLMs are incompatible with video, but that the current integration pattern fails to gate language against evidence.",
    details: [
      {
        heading: "Promising trajectory",
        body:
          "Scalable supervision, compositional semantics, and interactive reasoning interfaces can become foundational to video understanding if they are coupled to verifiable perception."
      },
      {
        heading: "Operational path forward",
        body:
          "The path forward is therefore agentic and evidence-gated: treat the LLM as a controller that iteratively selects what to inspect, requests motion-preserving signals such as trajectories, flow, or temporal tokens, and then validates or revises hypotheses via explicit consistency checks."
      }
    ]
  }
];

const actionPrinciples = [
  {
    title: "Representational Shifts",
    short: "Transformations over time",
    summary:
      "Current video-language models rely heavily on coarse tokenization schemes that discard high-frequency motion information before it reaches the semantic bottleneck.",
    core:
      "The fundamental unit of video understanding should not be static objects, but transformations over time. This requires representations that explicitly encode temporal change and directionality, including derivatives of the visual signal that preserve motion structure.",
    why:
      "Recent work on pixel-dense embeddings that distill optical flow into high-resolution feature grids represents a step in this direction, enabling dynamic information to be retained prior to semantic abstraction.",
    details: [
      {
        heading: "Representational demand",
        body:
          "Motion should survive compression rather than being reconstructed later from weak traces of sampled frames."
      },
      {
        heading: "What to preserve",
        body:
          "Temporal directionality, high-frequency change, and continuous state evolution should remain first-class features before the language bottleneck."
      }
    ]
  },
  {
    title: "Structurally Enforced Spatiotemporal Grounding",
    short: "Evidence-gated generation",
    summary:
      "Models cannot be expected to prioritize dynamics if their architectures allow visual evidence to be bypassed in favor of stronger language priors.",
    core:
      "We advocate for structurally enforced grounding mechanisms in which generation is explicitly constrained by spatiotemporal visual evidence.",
    why:
      "Frameworks such as PerceptionLM demonstrate the value of perception encoders that require fine-grained, temporally grounded descriptions, while self-diagnosis and contrastive verification further reduce hallucination by penalizing reliance on priors.",
    details: [
      {
        heading: "Verification loop",
        body:
          "Generation should be coupled to explicit consistency checks against counterfactual visual evidence rather than unconstrained narrative completion."
      },
      {
        heading: "Pixel-aligned outputs",
        body:
          "Replacing free-form textual outputs with pixel-aligned predictions such as temporal segments or spatiotemporal masks ensures that dynamics, rather than plausibility, become the discriminative signal."
      }
    ]
  },
  {
    title: "Evaluation and Benchmark Standards",
    short: "Make failure unavoidable",
    summary:
      "Finally, progress must be enforced through evaluation rather than inferred from scale or fluency.",
    core:
      "Benchmarks should satisfy three minimal requirements: temporal sensitivity, evidence localization, and pixel-level verifiability.",
    why:
      "Benchmarks that fail to enforce these constraints permit success via static cues and learned scripts, rewarding narrative fluency rather than genuine temporal perception.",
    details: [
      {
        heading: "Temporal sensitivity",
        body:
          "Performance should degrade under frame shuffling, reversal, or temporal corruption if a benchmark genuinely depends on time."
      },
      {
        heading: "Evidence localization and counterfactuals",
        body:
          "Models should identify when the supporting evidence occurs, not only what the answer is. Recognizing what did not happen, especially in anomalous or counterfactual scenarios, should be treated as a first-class evaluation signal."
      }
    ]
  }
];

const filterOptions = [
  "All",
  "Static-cue dominance",
  "Prior-driven temporal hallucination",
  "Coupled failure modes"
];

const resultsTable = document.getElementById("results-table");
const cradleTypewriter = document.getElementById("cradle-typewriter");
const heroTypewriter = document.getElementById("hero-typewriter");
const benchmarkSearch = document.getElementById("benchmark-search");
const benchmarkFilters = document.getElementById("benchmark-filters");
const benchmarkList = document.getElementById("benchmark-list");
const wordmarkToggle = document.getElementById("wordmark-toggle");
const heroSpectrum = document.getElementById("hero-spectrum");
const counterpointRail = document.getElementById("counterpoint-rail");
const counterpointIndex = document.getElementById("counterpoint-index");
const counterpointTitle = document.getElementById("counterpoint-title");
const counterpointSummary = document.getElementById("counterpoint-summary");
const counterpointAgree = document.getElementById("counterpoint-agree");
const counterpointResponse = document.getElementById("counterpoint-response");
const counterpointExtended = document.getElementById("counterpoint-extended");
const orbitBubbles = document.getElementById("orbit-bubbles");
const orbitStep = document.getElementById("orbit-step");
const orbitTitle = document.getElementById("orbit-title");
const orbitSummary = document.getElementById("orbit-summary");
const orbitCore = document.getElementById("orbit-core");
const orbitWhy = document.getElementById("orbit-why");
const orbitExpanders = document.getElementById("orbit-expanders");
let activeFilter = "All";
let activeCounterpoint = 0;
let activePrinciple = 0;

function renderResultsTable() {
  resultsTable.innerHTML = results
    .map(
      (row) => `
        <tr>
          <td>${row[0]}</td>
          <td>${row[1]}</td>
          <td>${row[2]}</td>
          <td>${row[3]}</td>
        </tr>
      `
    )
    .join("");
}

function renderTypewriter(target, chunks, lead = "Gemini-2.5-Pro response") {
  if (!target) return;
  const textNode = document.createElement("div");
  textNode.innerHTML = `${lead ? `<span class="prompt-lead">${lead}</span>` : ""}<span class="typewriter-text"></span>`;
  target.innerHTML = "";
  target.appendChild(textNode);
  const output = textNode.querySelector(".typewriter-text");

  let chunkIndex = 0;
  let charIndex = 0;
  let currentSpan = document.createElement("span");
  output.appendChild(currentSpan);

  function typeNext() {
    if (chunkIndex >= chunks.length) return;
    const chunk = chunks[chunkIndex];
    if (charIndex === 0) {
      currentSpan = document.createElement("span");
      if (chunk.wrong) currentSpan.className = "wrong";
      output.appendChild(currentSpan);
    }

    currentSpan.textContent += chunk.text[charIndex];
    charIndex += 1;

    if (charIndex < chunk.text.length) {
      window.setTimeout(typeNext, 14);
      return;
    }

    chunkIndex += 1;
    charIndex = 0;
    window.setTimeout(typeNext, 120);
  }

  typeNext();
}

function createCarousel(containerId, controlsId, slides, renderSlide, afterUpdate) {
  const container = document.getElementById(containerId);
  const controls = document.getElementById(controlsId);
  if (!container || !controls) return;

  let index = 0;
  container.innerHTML = `
    <div class="carousel-track">
      ${slides.map((slide, slideIndex) => renderSlide(slide, slideIndex)).join("")}
    </div>
  `;

  const track = container.querySelector(".carousel-track");

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    controls.querySelectorAll(".carousel-dot").forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === index);
    });
    if (afterUpdate) {
      afterUpdate(container, slides[index], index);
    }
  }

  controls.innerHTML = `
    <button class="carousel-button" type="button" data-action="prev">Prev</button>
    ${slides
      .map(
        (_, dotIndex) =>
          `<button class="carousel-dot ${dotIndex === 0 ? "is-active" : ""}" type="button" data-dot="${dotIndex}" aria-label="Go to slide ${dotIndex + 1}"></button>`
      )
      .join("")}
    <button class="carousel-button" type="button" data-action="next">Next</button>
  `;

  controls.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    if (button.dataset.action === "prev") {
      index = (index - 1 + slides.length) % slides.length;
      update();
      return;
    }

    if (button.dataset.action === "next") {
      index = (index + 1) % slides.length;
      update();
      return;
    }

    if (button.dataset.dot) {
      index = Number(button.dataset.dot);
      update();
    }
  });

  update();
}

function renderAvoeSlide(slide) {
  return `
    <article class="carousel-slide">
      <div class="slide-card">
        <div class="slide-media">
          <video src="${slide.video}" muted loop playsinline controls preload="metadata"></video>
        </div>
        <div class="slide-copy">
          <div class="response-board">
            <div class="question-line">${slide.question}</div>
            <div class="answer-grid">
              ${slide.answers
                .map(
                  (answer) => `
                    <div class="answer-row">
                      <div class="answer-meta">
                        <strong>${answer.model}</strong>
                        <span>${answer.value}</span>
                      </div>
                      <span class="answer-badge ${answer.correct ? "right" : "wrong"}">
                        ${answer.correct ? "Correct" : "Wrong"}
                      </span>
                    </div>
                  `
                )
                .join("")}
            </div>
          </div>
          <div class="quote-card">
            <p>${slide.note}</p>
            <p><strong>Prompt.</strong> ${slide.question}</p>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderTeacupSlide(slide) {
  return `
    <article class="carousel-slide">
      <div class="slide-card">
        <div class="slide-media">
          <p class="prompt-line">${slide.prompt}</p>
          <video src="${slide.video}" muted loop playsinline controls preload="metadata"></video>
        </div>
        <div class="slide-copy">
          <div class="excerpt-box typewriter-shell" data-typewriter="teacup"></div>
        </div>
      </div>
    </article>
  `;
}

function renderSyntheticSlide(slide) {
  return `
    <article class="carousel-slide">
      <div class="slide-card">
        <div class="slide-media">
          <p class="prompt-line">${slide.prompt}</p>
          <video src="${slide.video}" muted loop playsinline controls preload="metadata"></video>
        </div>
        <div class="slide-copy">
          <div class="excerpt-box typewriter-shell" data-typewriter="synthetic"></div>
        </div>
      </div>
    </article>
  `;
}

function hydrateCarouselTypewriter(container, slide, index) {
  const activeSlide = container.querySelectorAll(".carousel-slide")[index];
  if (!activeSlide) return;
  const target = activeSlide.querySelector("[data-typewriter]");
  if (!target) return;
  renderTypewriter(target, slide.response, slide.model);
}

function renderFilters() {
  benchmarkFilters.innerHTML = filterOptions
    .map(
      (option) => `
        <button class="filter-chip ${option === activeFilter ? "is-active" : ""}" type="button" data-filter="${option}">
          ${option}
        </button>
      `
    )
    .join("");

  benchmarkFilters.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderFilters();
      renderBenchmarks();
    });
  });
}

function tagClass(category) {
  if (category === "Static-cue dominance") return "static";
  if (category === "Prior-driven temporal hallucination") return "prior";
  return "coupled";
}

function visibleBenchmarks() {
  const query = benchmarkSearch.value.trim().toLowerCase();
  return benchmarkEntries.filter((entry) => {
    const matchesFilter = activeFilter === "All" || entry.category === activeFilter;
    const haystack = `${entry.benchmark} ${entry.category} ${entry.probe} ${entry.blindSpot}`.toLowerCase();
    return matchesFilter && haystack.includes(query);
  });
}

function renderBenchmarks() {
  const visible = visibleBenchmarks();

  benchmarkList.innerHTML = visible
    .map(
      (entry) => `
        <article class="benchmark-item" data-key="${entry.benchmark}">
          <div class="benchmark-meta">
            <span class="tag ${tagClass(entry.category)}">${entry.category}</span>
          </div>
          <h3>${entry.benchmark}</h3>
          <p class="benchmark-copy">${entry.probe}</p>
          <div class="benchmark-actions">
            <button class="benchmark-button" type="button" data-toggle="probe">Probe mechanism</button>
            <button class="benchmark-button" type="button" data-toggle="blind">Exposed blind spot</button>
          </div>
          <div class="benchmark-panels">
            <div class="benchmark-panel" data-panel="probe">
              <strong>Probe mechanism.</strong> ${entry.probe}
            </div>
            <div class="benchmark-panel" data-panel="blind">
              <strong>Exposed blind spot.</strong> ${entry.blindSpot}
            </div>
          </div>
          <p class="benchmark-citation">${entry.citation}</p>
        </article>
      `
    )
    .join("");

  benchmarkList.querySelectorAll(".benchmark-item").forEach((item) => {
    item.querySelectorAll("[data-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const key = button.dataset.toggle;
        item.querySelectorAll(".benchmark-panel").forEach((panel) => {
          if (panel.dataset.panel === key) {
            panel.classList.toggle("is-open");
          } else {
            panel.classList.remove("is-open");
          }
        });
      });
    });
  });
}

function renderCounterpoints() {
  if (!counterpointRail) return;
  counterpointRail.innerHTML = counterpoints
    .map(
      (item, index) => `
        <button class="counterpoint-tab ${index === activeCounterpoint ? "is-active" : ""}" type="button" data-counterpoint="${index}">
          <strong>${index + 1}. ${item.title}</strong>
          <span>${item.rail}</span>
        </button>
      `
    )
    .join("");

  const current = counterpoints[activeCounterpoint];
  counterpointIndex.textContent = String(activeCounterpoint + 1).padStart(2, "0");
  counterpointTitle.textContent = current.title;
  counterpointSummary.textContent = current.summary;
  counterpointAgree.textContent = current.agree;
  counterpointResponse.textContent = current.response;
  counterpointExtended.innerHTML = current.details
    .map(
      (detail) => `
        <div class="counterpoint-pullquote">
          <h4>${detail.heading}</h4>
          <p>${detail.body}</p>
        </div>
      `
    )
    .join("");

  counterpointRail.querySelectorAll("[data-counterpoint]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCounterpoint = Number(button.dataset.counterpoint);
      renderCounterpoints();
    });
  });
}

function renderOrbit() {
  if (!orbitBubbles) return;
  orbitBubbles.innerHTML = actionPrinciples
    .map(
      (item, index) => `
        <button class="action-tab ${index === activePrinciple ? "is-active" : ""}" type="button" data-principle="${index}">
          <strong>${item.title}</strong>
          <span>${item.short}</span>
        </button>
      `
    )
    .join("");

  const current = actionPrinciples[activePrinciple];
  orbitStep.textContent = `${activePrinciple + 1} / ${actionPrinciples.length}`;
  orbitTitle.textContent = current.title;
  orbitSummary.textContent = current.summary;
  orbitCore.textContent = current.core;
  orbitWhy.textContent = current.why;
  orbitExpanders.innerHTML = current.details
    .map(
      (detail) => `
        <div class="orbit-expander">
          <h4>${detail.heading}</h4>
          <p>${detail.body}</p>
        </div>
      `
    )
    .join("");

  orbitBubbles.querySelectorAll("[data-principle]").forEach((button) => {
    button.addEventListener("click", () => {
      activePrinciple = Number(button.dataset.principle);
      renderOrbit();
    });
  });
}

function setupEasterEgg() {
  if (!wordmarkToggle) return;
  wordmarkToggle.addEventListener("dblclick", (event) => {
    event.preventDefault();
    document.body.classList.toggle("spectral-mode");
  });
}

function setupHeroSpectrum() {
  if (!heroSpectrum) return;
  heroSpectrum.textContent = heroSpectrum.textContent.trim();
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
}

function setupBackground() {
  const canvas = document.getElementById("background-canvas");
  if (!canvas) return;

  const context = canvas.getContext("2d");
  if (!context) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pointer = { x: window.innerWidth * 0.72, y: window.innerHeight * 0.2, active: false };
  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let nodes = [];
  let comets = [];
  let glyphs = [];
  let animationFrame = 0;

  function createNodes() {
    const count = Math.max(18, Math.min(42, Math.floor((width * height) / 39000)));
    nodes = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 0.9 + Math.random() * 2.1,
      drift: 0.14 + Math.random() * 0.32,
      speedX: (Math.random() - 0.5) * 0.22,
      speedY: (Math.random() - 0.5) * 0.22,
      phase: Math.random() * Math.PI * 2,
      tint: index % 3
    }));

    comets = Array.from({ length: Math.max(2, Math.min(5, Math.floor(width / 420))) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: 28 + Math.random() * 46,
      speed: 0.7 + Math.random() * 0.9,
      angle: Math.PI * (0.18 + Math.random() * 0.22),
      alpha: 0.08 + Math.random() * 0.06
    }));

    const symbols = ["∆t", "→", "○", "✦", "≈"];
    glyphs = Array.from({ length: 6 }, (_, index) => ({
      x: width * (0.14 + (index % 3) * 0.28) + (Math.random() - 0.5) * 50,
      y: height * (0.2 + Math.floor(index / 3) * 0.45) + (Math.random() - 0.5) * 60,
      text: symbols[index % symbols.length],
      phase: Math.random() * Math.PI * 2,
      size: 15 + Math.random() * 9
    }));
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    createNodes();
  }

  function drawBackdrop(time) {
    const gradient = context.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "rgba(32, 79, 117, 0.035)");
    gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
    gradient.addColorStop(1, "rgba(157, 99, 59, 0.03)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    for (let band = 0; band < 5; band += 1) {
      const y = (height / 5) * band + Math.sin(time * 0.00018 + band) * 14;
      context.strokeStyle = `rgba(24, 26, 32, ${0.016 - band * 0.002})`;
      context.beginPath();
      context.moveTo(0, y);
      context.bezierCurveTo(width * 0.2, y - 8, width * 0.7, y + 8, width, y - 4);
      context.stroke();
    }
  }

  function drawConnections(time) {
    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i];
        const b = nodes[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        const threshold = pointer.active ? 138 : 112;
        if (distance > threshold) continue;

        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2;
        const influence = Math.max(0, 1 - Math.hypot(pointer.x - mx, pointer.y - my) / 260);
        const alpha = Math.max(0.02, (1 - distance / threshold) * (0.07 + influence * 0.1));

        context.strokeStyle = `rgba(32, 79, 117, ${alpha})`;
        context.lineWidth = 0.85 + influence * 0.45;
        context.beginPath();
        context.moveTo(a.x, a.y);
        context.quadraticCurveTo(
          mx + Math.sin(time * 0.001 + i) * 5,
          my + Math.cos(time * 0.0012 + j) * 5,
          b.x,
          b.y
        );
        context.stroke();
      }
    }
  }

  function drawComets() {
    comets.forEach((comet) => {
      comet.x += Math.cos(comet.angle) * comet.speed;
      comet.y += Math.sin(comet.angle) * comet.speed;

      if (comet.x - comet.length > width + 80 || comet.y - comet.length > height + 80) {
        comet.x = -60;
        comet.y = Math.random() * (height * 0.55);
      }

      const tailX = comet.x - Math.cos(comet.angle) * comet.length;
      const tailY = comet.y - Math.sin(comet.angle) * comet.length;
      const gradient = context.createLinearGradient(comet.x, comet.y, tailX, tailY);
      gradient.addColorStop(0, `rgba(255,255,255,${comet.alpha + 0.1})`);
      gradient.addColorStop(0.4, `rgba(127,89,255,${comet.alpha})`);
      gradient.addColorStop(1, "rgba(127,89,255,0)");
      context.strokeStyle = gradient;
      context.lineWidth = 1.2;
      context.beginPath();
      context.moveTo(comet.x, comet.y);
      context.lineTo(tailX, tailY);
      context.stroke();
    });
  }

  function drawGlyphs(time) {
    context.save();
    glyphs.forEach((glyph, index) => {
      const wobbleY = Math.sin(time * 0.00045 + glyph.phase) * 10;
      const wobbleX = Math.cos(time * 0.00028 + glyph.phase) * 5;
      const activeBoost = document.body.classList.contains("spectral-mode") ? 1 : 0;
      context.font = `600 ${glyph.size}px "IBM Plex Mono", monospace`;
      context.fillStyle = `rgba(90, 99, 220, ${0.035 + activeBoost * 0.04 + (index % 2) * 0.01})`;
      context.fillText(glyph.text, glyph.x + wobbleX, glyph.y + wobbleY);
    });
    context.restore();
  }

  function drawNodes() {
    nodes.forEach((node) => {
      node.phase += prefersReducedMotion ? 0.001 : node.drift * 0.018;
      node.x += node.speedX + Math.sin(node.phase) * node.drift;
      node.y += node.speedY + Math.cos(node.phase * 0.86) * node.drift;

      if (node.x < -40) node.x = width + 40;
      if (node.x > width + 40) node.x = -40;
      if (node.y < -40) node.y = height + 40;
      if (node.y > height + 40) node.y = -40;

      const dx = pointer.x - node.x;
      const dy = pointer.y - node.y;
      const influence = Math.max(0, 1 - Math.hypot(dx, dy) / 220);
      const fills = [
        `rgba(32, 79, 117, ${0.16 + influence * 0.12})`,
        `rgba(157, 99, 59, ${0.15 + influence * 0.1})`,
        `rgba(78, 106, 68, ${0.13 + influence * 0.08})`
      ];

      context.beginPath();
      context.fillStyle = fills[node.tint];
      context.arc(node.x, node.y, node.radius + influence * 1.1, 0, Math.PI * 2);
      context.fill();
    });
  }

  function render(time) {
    context.clearRect(0, 0, width, height);
    drawBackdrop(time);
    drawComets();
    drawConnections(time);
    drawNodes(time);
    drawGlyphs(time);
    animationFrame = window.requestAnimationFrame(render);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  });
  window.addEventListener("pointerleave", () => {
    pointer.active = false;
    pointer.x = width * 0.72;
    pointer.y = height * 0.2;
  });

  resize();
  render(0);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.cancelAnimationFrame(animationFrame);
    } else {
      animationFrame = window.requestAnimationFrame(render);
    }
  });
}

renderResultsTable();
renderTypewriter(heroTypewriter, heroTranscript, "Position");
renderTypewriter(cradleTypewriter, cradleTranscript, "Gemini-2.5-Pro response");
createCarousel("avoe-carousel", "avoe-controls", avoeSlides, renderAvoeSlide);
createCarousel("teacup-carousel", "teacup-controls", teacupSlides, renderTeacupSlide, hydrateCarouselTypewriter);
createCarousel("synthetic-carousel", "synthetic-controls", syntheticSlides, renderSyntheticSlide, hydrateCarouselTypewriter);
renderFilters();
renderBenchmarks();
renderCounterpoints();
renderOrbit();
setupReveal();
setupBackground();
setupEasterEgg();
setupHeroSpectrum();

benchmarkSearch.addEventListener("input", renderBenchmarks);
