# Logo Requirements

This document lists all logos needed for the Procedure website and their status.

## Solution: @icons-pack/react-simple-icons

We use the `@icons-pack/react-simple-icons` npm package which provides 6700+ brand/technology icons as React components.

**Installation:** Already installed
```bash
npm install @icons-pack/react-simple-icons
```

**Usage utility:** `/lib/tech-icons.tsx`

```tsx
import { TechIcon, getTechIcon, hasTechIcon } from '@/lib/tech-icons';

// Component usage
<TechIcon name="React" size={24} />
<TechIcon name="Python" size={24} color="#14B8A6" />

// Programmatic usage
const Icon = getTechIcon('React');
if (Icon) return <Icon size={24} />;

// Check availability
if (hasTechIcon('Docker')) { ... }
```

**Auto-integration:** The `TechStack` component automatically uses Simple Icons when available, falling back to first-letter badges for technologies without icons.

---

## Icons Available via Simple Icons

The following technology icons are mapped and working:

### AI/ML Platforms
| Technology | Icon Name | Status |
|------------|-----------|--------|
| OpenAI | `SiOpenai` | Available |
| Anthropic/Claude | `SiAnthropic` | Available |
| Meta/Llama | `SiMeta` | Available |
| Hugging Face | `SiHuggingface` | Available |
| Google/Gemini | `SiGoogle` | Available |

### AI/ML Frameworks
| Technology | Icon Name | Status |
|------------|-----------|--------|
| LangChain | `SiLangchain` | Available |
| PyTorch | `SiPytorch` | Available |
| TensorFlow | `SiTensorflow` | Available |
| MLflow | `SiMlflow` | Available |
| Weights & Biases | `SiWeightsandbiases` | Available |

### Cloud Platforms
| Technology | Icon Name | Status |
|------------|-----------|--------|
| Google Cloud | `SiGooglecloud` | Available |
| AWS | - | **Not Available** (trademark) |
| Azure | - | **Not Available** (trademark) |

### Infrastructure & DevOps
| Technology | Icon Name | Status |
|------------|-----------|--------|
| Kubernetes | `SiKubernetes` | Available |
| Docker | `SiDocker` | Available |
| Terraform | `SiTerraform` | Available |
| Pulumi | `SiPulumi` | Available |
| Helm | `SiHelm` | Available |
| Istio | `SiIstio` | Available |
| Prometheus | `SiPrometheus` | Available |
| Grafana | `SiGrafana` | Available |
| Datadog | `SiDatadog` | Available |
| PagerDuty | `SiPagerduty` | Available |
| ArgoCD | `SiArgo` | Available |

### Programming Languages & Frameworks
| Technology | Icon Name | Status |
|------------|-----------|--------|
| React | `SiReact` | Available |
| Next.js | `SiNextdotjs` | Available |
| Vue.js | `SiVuedotjs` | Available |
| Nuxt | `SiNuxt` | Available |
| TypeScript | `SiTypescript` | Available |
| Node.js | `SiNodedotjs` | Available |
| Python | `SiPython` | Available |
| Go | `SiGo` | Available |
| Rust | `SiRust` | Available |
| Swift | `SiSwift` | Available |
| Kotlin | `SiKotlin` | Available |

### Databases
| Technology | Icon Name | Status |
|------------|-----------|--------|
| PostgreSQL | `SiPostgresql` | Available |
| MongoDB | `SiMongodb` | Available |
| Redis | `SiRedis` | Available |
| Kafka | `SiApachekafka` | Available |
| Elasticsearch | `SiElasticsearch` | Available |
| GraphQL | `SiGraphql` | Available |

### Design Tools
| Technology | Icon Name | Status |
|------------|-----------|--------|
| Figma | `SiFigma` | Available |
| Storybook | `SiStorybook` | Available |
| Framer | `SiFramer` | Available |
| Radix UI | `SiRadixui` | Available |
| shadcn/ui | `SiShadcnui` | Available |

### Testing & QA
| Technology | Icon Name | Status |
|------------|-----------|--------|
| Jest | `SiJest` | Available |
| Cypress | `SiCypress` | Available |
| Pytest | `SiPytest` | Available |
| Selenium | `SiSelenium` | Available |
| Playwright | - | **Not Available** |

### Other Tools
| Technology | Icon Name | Status |
|------------|-----------|--------|
| Vercel | `SiVercel` | Available |
| GitHub | `SiGithub` | Available |
| GitLab | `SiGitlab` | Available |
| Firebase | `SiFirebase` | Available |
| Expo | `SiExpo` | Available |
| Tailwind CSS | `SiTailwindcss` | Available |
| OpenTelemetry | `SiOpentelemetry` | Available |
| OWASP | `SiOwasp` | Available |

---

## Icons NOT Available (Require Manual SVGs)

These icons are not in Simple Icons and need manual SVG files:

### Cloud Platforms (Trademark Restrictions)
- **AWS / Amazon Web Services** - Download from [AWS Architecture Icons](https://aws.amazon.com/architecture/icons/)
- **Microsoft Azure** - Download from [Microsoft Azure Icons](https://docs.microsoft.com/en-us/azure/architecture/icons/)

### Vector Databases
- **Pinecone** - Check official website
- **Weaviate** - Check official website
- **Chroma** - Check official website
- **Qdrant** - Check official website
- **Milvus** - Check official website

### AI Tools
- **LlamaIndex** - Check official website
- **CrewAI** - Check official website
- **AutoGPT** - Check GitHub
- **Guardrails AI** - Check official website
- **NeMo Guardrails** - Check NVIDIA website
- **Lakera** - Check official website

### Testing
- **Playwright** - Check official website
- **k6** - Check official website

### Other
- **Temporal** - Check official website
- **Zapier** - May have trademark restrictions

**Where to find:**
- Official brand press kits
- [Worldvectorlogo](https://worldvectorlogo.com/)
- GitHub repositories (often have SVG logos)

**Format:** Place manual SVGs in `/public/logos/technologies/` as `lowercase-name.svg`

---

## Client Logos (Complete)

Located in `/public/logos/client/`:
- [x] Aster
- [x] ESPN
- [x] KredX
- [x] Pine Labs
- [x] Setu
- [x] Tenmeya
- [x] Timely
- [x] Treebo
- [x] Turtlemint
- [x] Workshop Ventures

## Compliance Badges (Complete)

Located in `/public/badges/`:
- [x] SOC 2
- [x] HIPAA
- [x] GDPR
- [x] ISO 27001

---

## Adding New Icons

1. **Check Simple Icons first:**
   ```bash
   node -e "const si = require('@icons-pack/react-simple-icons'); console.log(Object.keys(si).filter(k => k.toLowerCase().includes('yourterm')).slice(0,10));"
   ```

2. **Add to `/lib/tech-icons.tsx`:**
   ```tsx
   import { SiNewIcon } from "@icons-pack/react-simple-icons";

   // Add to iconMap
   "newtech": SiNewIcon,
   ```

3. **For manual SVGs:** Add to `/public/logos/technologies/` and create custom mapping if needed.
