"use client"; // Marca este componente como un Client Component

import { useRouter } from "next/navigation"; // Usa next/navigation en lugar de next/router
import { Cpu, FileText, Workflow } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function SoftwareEngineeringConcepts() {
  const router = useRouter(); // Obtén el objeto router de next/navigation

  const navigateToProyectCharter = () => {
    router.push("/project-charter"); // Navega a /proyect-charter
  };
  const navigateToCicloVsGestion = () => {
    router.push("/ciclo-vs-gestion"); // Navega a /ciclo-vs-gestion
  };
  // Función para navegar a la página Canvas
  const navigateToCanvas = () => {
    router.push("/canvas");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Conceptos Clave en Gestion de Proyectos de software
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explorando las bases fundamentales y metodologías esenciales en la gestión de proyectos de software
        </p>
        {/* Botones de navegación */}
        <div className="mt-6 space-x-4">
          <button
          onClick={navigateToProyectCharter}
          className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
          Ir a Project Charter
          </button>
            <button
            onClick={navigateToCicloVsGestion}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
            Ir a Ciclo vs Gestion
            </button>
          <button
            onClick={navigateToCanvas}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Ir a Canvas
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ConceptCard
            icon={<Cpu className="h-8 w-8 text-primary" />}
            title="Definición de Gestión de Proyectos"
            description="Disciplina que aplica conocimientos, habilidades, herramientas y técnicas a las actividades de un proyecto para cumplir con sus requisitos."
            content="La gestión de proyectos se define como la aplicación de metodologías, procesos y buenas prácticas para planificar, ejecutar y controlar proyectos de manera que se logren los objetivos planteados en tiempo, costo, alcance y calidad. Involucra coordinar recursos humanos, financieros y materiales, así como gestionar riesgos y comunicación entre los interesados."
          />
          <ConceptCard
            icon={<Cpu className="h-8 w-8 text-primary" />}
            title="Qué es la Gestión de Proyectos"
            description="Un enfoque organizado para lograr objetivos específicos mediante la ejecución de proyectos."
            content="La gestión de proyectos es la práctica de liderar un equipo de trabajo para alcanzar metas claramente definidas en un período de tiempo determinado. Permite estructurar el esfuerzo en fases (inicio, planificación, ejecución, monitoreo y cierre), optimizando recursos y garantizando que los entregables cumplan con los estándares acordados. Es fundamental para el éxito de iniciativas en áreas como ingeniería, negocios, tecnología y más."
          />

          <ConceptCard
            icon={<FileText className="h-8 w-8 text-primary" />}
            title="¿Qué es el PMI?"
            description="El PMI (Project Management Institute) es una organización global sin fines de lucro que establece estándares y mejores prácticas en la gestión de proyectos."
            content="PMI es conocido por su enfoque en la gestión de proyectos a través de su guía estándar, el PMBOK (Project Management Body of Knowledge), que proporciona un marco estructurado para la planificación, ejecución y cierre de proyectos. A través de certificaciones como PMP (Project Management Professional), PMI promueve una metodología que ayuda a los profesionales a mejorar sus competencias en gestión de proyectos."
          />

          <ConceptCard
            icon={<Diagram className="h-8 w-8 text-primary" />}
            title="Características"
            description="El PMI establece un conjunto de principios, normas y mejores prácticas para gestionar proyectos de manera eficiente."
            content="Las características clave del PMI incluyen:
            - **Estándares globales**: Proporciona un enfoque uniforme para la gestión de proyectos en diferentes industrias.
            - **Ciclo de vida del proyecto**: Define las fases de un proyecto desde su inicio hasta su cierre.
            - **Áreas de conocimiento**: El PMI organiza la gestión de proyectos en áreas como alcance, tiempo, costo, calidad, recursos, comunicaciones, riesgos, adquisiciones e interesados.
            - **Enfoque en resultados**: Su objetivo es garantizar que los proyectos se entreguen a tiempo, dentro del presupuesto y según los requisitos establecidos.
            - **Certificación PMP**: Reconocida mundialmente, esta certificación valida la experiencia y conocimientos de los profesionales en la gestión de proyectos."
          />

        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Anibal Emilio Tirado Delgado, Javier Bacilio Sánchez Y Adolfo Cortes Corona | Gestión de proyectos de software.</p>
          <p className="mt-2">Diseñado con pasión por la ingeniería de software.</p>
        </div>
      </footer>
    </div>
  );
}

interface ConceptCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: string;
}

function ConceptCard({ icon, title, description, content }: ConceptCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center space-x-4">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Leer más</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">{content}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}