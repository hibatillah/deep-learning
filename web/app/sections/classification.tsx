import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import AudioClassification from "../_components/audio-classification"

const items = [
  {
    id: "1",
    title: "What makes Origin UI different?",
    content:
      "Origin UI focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.",
  },
  {
    id: "2",
    title: "How can I customize the components?",
    content:
      "Use our CSS variables for global styling, or className and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.",
  },
  {
    id: "3",
    title: "Is Origin UI optimized for performance?",
    content:
      "Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.",
  },
  {
    id: "4",
    title: "How accessible are the components?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
]

function Tutorial() {
  return (
    <div className="space-y-4">
      <h3 className="font-open-sans text-pretty text-xl/snug font-bold tracking-tighter text-zinc-800">
        Proses Klasifikasi
      </h3>
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-2"
        defaultValue="3"
      >
        {items.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="rounded-lg border bg-background px-4 py-1"
          >
            <AccordionTrigger className="py-2 text-[15px] leading-6 text-indigo-500 hover:no-underline">
              <span className="text-primary">{item.title}</span>
            </AccordionTrigger>
            <AccordionContent className="pb-2 text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default function Classification() {
  return (
    <section
      id="classification"
      className="container grid grid-cols-1 gap-4 gap-y-12 px-4 pb-32 lg:grid-cols-2 lg:gap-12 lg:px-20"
    >
      <AudioClassification />
      <Tutorial />
    </section>
  )
}
