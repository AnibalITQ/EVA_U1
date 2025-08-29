"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CicloVsGestionPage() {
  const router = useRouter()

  // Navegación
  const navigateToScrum = () => router.push("/scrum")
  const navigateToHome = () => router.push("/")
  const navigateToProyectCharter = () => router.push("/proyect-charter")
  const navigateToCicloVsGestion = () => router.push("/ciclo-vs-gestion")
  const navigateToCanvas = () => router.push("/canvas")

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container px-4 md:px-6">

        {/* Botones de navegación */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button onClick={navigateToHome} className="px-4 py-2 border rounded">Regresar a la pagina principal</button>
          <button onClick={navigateToScrum} className="px-4 py-2 border rounded">Metodología Scrum</button>
          <button onClick={navigateToProyectCharter} className="px-4 py-2 border rounded">Project Charter</button>
          <button
            onClick={navigateToCicloVsGestion}
            className="px-4 py-2 border rounded bg-primary text-primary-foreground"
          >
            Ciclo vs Gestión
          </button>
          <button onClick={navigateToCanvas} className="px-4 py-2 border rounded">Modelo Canvas</button>
        </div>

        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Ciclo de Vida vs Gestión de Proyectos
          </h1>
          <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
            El ciclo de vida y la gestión de proyectos son conceptos fundamentales en la administración de proyectos, pero tienen diferencias clave en su enfoque y objetivos. Aquí comparamos ambos.
          </p>
        </div>

        {/* Tarjeta introductoria */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle>Introducción</CardTitle>
            <CardDescription>En esta sección, exploraremos las diferencias y similitudes entre el ciclo de vida de un proyecto y su gestión. Ambos conceptos son esenciales para la correcta ejecución de un proyecto, pero su aplicación y objetivos varían.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              El ciclo de vida de un proyecto abarca las etapas que atraviesa el proyecto desde su inicio hasta su cierre, mientras que la gestión de proyectos se refiere al proceso continuo de planificación, ejecución y control de las actividades necesarias para alcanzar los objetivos del proyecto.
            </p>
          </CardContent>
        </Card>

        {/* Tabs para comparar */}
        <Tabs defaultValue="ciclo" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="ciclo">Ciclo de Vida</TabsTrigger>
            <TabsTrigger value="gestion">Gestión de Proyectos</TabsTrigger>
          </TabsList>

          <TabsContent value="ciclo" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Ciclo de Vida</CardTitle>
                <CardDescription>El ciclo de vida de un proyecto describe las fases que atraviesa desde su concepción hasta su cierre. Este ciclo tiene un enfoque secuencial y bien definido.</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="definicion">
                    <AccordionTrigger>Definición</AccordionTrigger>
                    <AccordionContent>
                      <p>El ciclo de vida de un proyecto es el conjunto de fases a través de las cuales pasa un proyecto desde su inicio hasta su cierre. Abarca desde la planificación, la ejecución, hasta el cierre y la entrega final del producto.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="fases">
                    <AccordionTrigger>Fases</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Inicio</li>
                        <li>Planificación</li>
                        <li>Ejecutación</li>
                        <li>Cierre</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gestion" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Gestión de Proyectos</CardTitle>
                <CardDescription>La gestión de proyectos se enfoca en la planificación, ejecución y control de todos los aspectos del proyecto, con el objetivo de cumplir con los plazos, presupuesto y alcance establecidos.</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="definicion">
                    <AccordionTrigger>Definición</AccordionTrigger>
                    <AccordionContent>
                      <p>La gestión de proyectos implica la aplicación de conocimientos, habilidades, herramientas y técnicas para cumplir con los requisitos del proyecto y gestionar su ejecución de manera eficiente.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="areas">
                    <AccordionTrigger>Áreas de Conocimiento</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Alcance</li>
                        <li>Tiempo</li>
                        <li>Costo</li>
                        <li>Calidad</li>
                        <li>Recursos Humanos</li>
                        <li>Riesgos</li>
                        <li>Comunicaciones</li>
                        <li>Adquisiciones</li>
                        <li>Interesados</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Conclusión */}
        <Card className="mt-10">
          <CardHeader>
            <CardTitle>Conclusión</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Tanto el ciclo de vida como la gestión de proyectos son esenciales para el éxito de cualquier proyecto. Sin embargo, mientras que el ciclo de vida define las fases a seguir, la gestión de proyectos se enfoca en administrar de manera efectiva todos los recursos, plazos y riesgos a lo largo de estas fases.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
