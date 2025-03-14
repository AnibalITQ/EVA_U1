"use client"; // Marca este componente como un Client Component

import { useRouter } from "next/navigation"; // Usa next/navigation en lugar de next/router
import { Cpu, Layout, FileText, MapIcon as Diagram, CheckSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function SoftwareEngineeringConcepts() {
  const router = useRouter(); // Obtén el objeto router de next/navigation

  // Función para navegar a la página Scrum
  const navigateToScrum = () => {
    router.push("/scrum"); // Navega a /scrum
  };

  // Función para navegar a la página Espiral
  const navigateToEspiral = () => {
    router.push("/espiral"); // Navega a /espiral
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Conceptos Clave en Ingeniería de Software
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explorando las bases fundamentales y metodologías esenciales en el desarrollo de software moderno.
        </p>
        {/* Botones de navegación */}
        <div className="mt-6 space-x-4">
          <button
            onClick={navigateToScrum}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Ir a Scrum
          </button>
          <button
            onClick={navigateToEspiral}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Ir a Espiral
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ConceptCard
            icon={<Cpu className="h-8 w-8 text-primary" />}
            title="Ingeniería de Software"
            description="La aplicación sistemática de enfoques disciplinados y cuantificables al desarrollo, operación y mantenimiento de software."
            content="La ingeniería de software es una disciplina de ingeniería que se ocupa de todos los aspectos de la producción de software, desde las etapas iniciales de la especificación del sistema hasta el mantenimiento del sistema después de que se ha puesto en uso. Integra principios de matemáticas, ciencias de la computación y prácticas de ingeniería con el objetivo de desarrollar software de alta calidad de manera sistemática, controlada y eficiente."
          />

          <ConceptCard
            icon={<Layout className="h-8 w-8 text-primary" />}
            title="Modelo Canvas"
            description="Una herramienta de gestión estratégica para desarrollar nuevos modelos de negocio o documentar los existentes."
            content="El Modelo Canvas, también conocido como Business Model Canvas, es una plantilla de gestión estratégica para el desarrollo de nuevos modelos de negocio o la documentación de los ya existentes. Es un gráfico visual con elementos que describen la propuesta de valor de una empresa o producto, la infraestructura, los clientes y las finanzas. Ayuda a las empresas a alinear sus actividades ilustrando posibles compensaciones y facilitando la innovación en modelos de negocio."
          />

          <ConceptCard
            icon={<FileText className="h-8 w-8 text-primary" />}
            title="Norma IEEE 830"
            description="Un estándar que especifica la estructura recomendada para la Especificación de Requisitos de Software (ERS)."
            content="La Norma IEEE 830 es un estándar que proporciona directrices para la especificación de los requisitos de software. Su propósito es ayudar a los desarrolladores de software a establecer la base para los acuerdos entre clientes y proveedores sobre lo que el producto de software debe hacer. Establece el formato y contenido de las especificaciones de requisitos de software (ERS), incluyendo características funcionales, interfaces externas, rendimiento, atributos y restricciones de diseño del software."
          />

          <ConceptCard
            icon={<Diagram className="h-8 w-8 text-primary" />}
            title="UML (Unified Modeling Language)"
            description="Un lenguaje de modelado visual utilizado para especificar, visualizar, construir y documentar artefactos de sistemas de software."
            content="UML (Unified Modeling Language) es un lenguaje de modelado visual de propósito general utilizado en ingeniería de software. Proporciona una manera estándar de visualizar el diseño de un sistema, incluyendo aspectos conceptuales como procesos de negocio y funciones del sistema, y aspectos concretos como expresiones de lenguajes de programación, esquemas de bases de datos y componentes de software reutilizables. UML incluye diversos tipos de diagramas que ayudan a los desarrolladores a especificar, visualizar y documentar modelos de sistemas de software, además de utilizarse para modelar procesos de negocio y sistemas no software."
          />

          <ConceptCard
            icon={<CheckSquare className="h-8 w-8 text-primary" />}
            title="Estudio de Factibilidad"
            description="Un análisis que evalúa la viabilidad de un proyecto de software propuesto."
            content="El estudio de factibilidad es una evaluación preliminar de la viabilidad de un proyecto de software propuesto. Su objetivo es determinar si el proyecto es técnicamente posible, económicamente justificable y operacionalmente viable. Este estudio típicamente examina tres áreas principales: factibilidad técnica (¿puede construirse?), factibilidad económica (¿los beneficios superan los costos?), y factibilidad operacional (¿funcionará en la organización?). Ayuda a los tomadores de decisiones a determinar si proceder con el proyecto, modificarlo o abandonarlo antes de invertir recursos significativos."
          />
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Anibal Emilio Tirado Delgado && Javier Bacilio Sánchez | Ingeniería de software.</p>
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