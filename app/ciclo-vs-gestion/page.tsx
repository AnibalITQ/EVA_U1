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
            [Placeholder: breve introducción a la comparación entre ciclo de vida y gestión de proyectos]
          </p>
        </div>

        {/* Tarjeta introductoria */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle>Introducción</CardTitle>
            <CardDescription>[Placeholder: explicación general del tema]</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              [Placeholder: texto introductorio aquí...]
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
                <CardDescription>[Placeholder: definición y fases]</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="definicion">
                    <AccordionTrigger>Definición</AccordionTrigger>
                    <AccordionContent>
                      <p>[Placeholder: aquí va la definición de ciclo de vida]</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="fases">
                    <AccordionTrigger>Fases</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>[Placeholder: fase 1]</li>
                        <li>[Placeholder: fase 2]</li>
                        <li>[Placeholder: fase 3]</li>
                        <li>[Placeholder: fase 4]</li>
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
                <CardDescription>[Placeholder: definición y áreas de conocimiento]</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="definicion">
                    <AccordionTrigger>Definición</AccordionTrigger>
                    <AccordionContent>
                      <p>[Placeholder: aquí va la definición de gestión de proyectos]</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="areas">
                    <AccordionTrigger>Áreas de Conocimiento</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>[Placeholder: alcance]</li>
                        <li>[Placeholder: tiempo]</li>
                        <li>[Placeholder: costo]</li>
                        <li>[Placeholder: calidad]</li>
                        <li>[Placeholder: recursos humanos]</li>
                        <li>[Placeholder: riesgos]</li>
                        <li>[Placeholder: comunicaciones]</li>
                        <li>[Placeholder: adquisiciones]</li>
                        <li>[Placeholder: interesados]</li>
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
              [Placeholder: resumen comparativo entre ciclo de vida y gestión de proyectos]
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
