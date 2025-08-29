"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image";
export default function ProgrammingLanguagesSection() {
  const router = useRouter() // Obtén el objeto router de next/navigation

  // Funciones de navegación
/*   const navigateToScrum = () => {
    router.push("/scrum") // Navega a /scrum
  } */

    const navigateToHome = () => {
    router.push("/") // Navega a /scrum
  }

  const navigateToProyectCharter = () => {
    router.push("/proyect-charter") // Navega a /proyect-charter
  }

  const navigateToCicloVsGestion = () => {
    router.push("/ciclo-vs-gestion") // Navega a /ciclo-vs-gestion
  }

  const navigateToCanvas = () => {
    router.push("/canvas") // Navega a /Canvas
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container px-4 md:px-6">
        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Button onClick={navigateToHome} variant="outline">
            Regresar a la Pagina Principal
          </Button>
{/*           <Button onClick={navigateToScrum} variant="outline">
            Metodología Scrum
          </Button> */}
          <Button onClick={navigateToProyectCharter} variant="outline"
           className="bg-primary text-primary-foreground hover:bg-primary/90">
            Project Charter
          </Button>
          <Button
            onClick={navigateToCicloVsGestion}
            variant="outline"
           
          >
            Ciclo vs Gestión
          </Button>
          <Button onClick={navigateToCanvas} variant="outline">
            Modelo Canvas
          </Button>
        </div>
      
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              ¿Qué es el project charter?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Es el documento que da vida a un proyecto. En él se resumen los objetivos, el alcance, los responsables y los recursos necesarios.
              Funciona como una “carta de presentación” del proyecto, asegurando que todos los involucrados entiendan hacia dónde se quiere llegar y cuál es su papel.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
          <Card>
            <CardHeader>
              <CardTitle>Partes que componen un Project Charter</CardTitle>
            </CardHeader>
            <CardContent >
              <ol className="list-disc pl-5 space-y-2">
                <li><b>Propósito del proyecto:</b> Explica por qué se inicia el proyecto y qué problema o necesidad busca resolver. Responde a la pregunta: ¿para qué existe este proyecto?</li>
                <li><b>Objetivos:</b> Declaran qué se quiere lograr de manera concreta y medible. Normalmente están alineados con los objetivos estratégicos de la organización.</li>
                <li><b>Alcance:</b> Define los límites del proyecto: qué actividades, entregables y resultados están incluidos, y qué no. Ayuda a evitar malentendidos.</li>
                <li><b>Stakeholders:</b> Identifica a las personas, equipos o áreas que tienen interés o impacto en el proyecto. Se incluye al patrocinador, al cliente, al equipo del proyecto, etc.</li>
                <li><b>Roles y responsabilidades:</b> Describe quién es responsable de qué dentro del proyecto. Por ejemplo: patrocinador, director de proyecto, equipo técnico, usuarios finales.</li>
                <li><b>Entregables principales:</b> Los productos o resultados clave que debe generar el proyecto. Pueden ser reportes, software, infraestructura, un servicio, etc.</li>
                <li><b>Cronograma inicial:</b> Un panorama general de las fases o hitos más importantes, con fechas tentativas de inicio y fin. No es un plan detallado, pero sí un mapa de ruta.</li>
                <li><b>Recursos y presupuesto preliminar:</b> Estimación de los recursos financieros, humanos, materiales y tecnológicos que se necesitarán para ejecutar el proyecto.</li>
                <li><b>Riesgos iniciales:</b> Una lista preliminar de posibles riesgos que podrían afectar el proyecto, junto con ideas para mitigarlos.</li>
                <li><b>Criterios de éxito:</b> Define cómo se sabrá si el proyecto fue exitoso. Pueden ser indicadores de calidad, plazos cumplidos, satisfacción del cliente o beneficios obtenidos.</li>
              </ol>
            </CardContent>
          </Card>


          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Ejemplo</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/project-charter-ejemplo.png"
                alt="Ejemplo de Project Charter"
                width={600}
                height={400}
                className="rounded-xl object-contain"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    </div>
  </section>
  )
}

