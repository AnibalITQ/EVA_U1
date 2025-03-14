import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon } from "lucide-react"

export default function SpiralModelPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">El Modelo Espiral en Desarrollo de Software</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Una metodología iterativa que combina elementos de diseño y prototipado en un enfoque sistemático
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Definición</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              El modelo espiral es un modelo de proceso de software evolutivo que combina la naturaleza iterativa del
              prototipado con los aspectos controlados y sistemáticos del modelo en cascada.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Creado por</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Fue desarrollado por Barry Boehm en 1986 como una evolución de los modelos de desarrollo de software
              existentes, para abordar las debilidades del modelo en cascada tradicional.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Característica Principal</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Enfoque en la gestión de riesgos, permitiendo a los equipos adoptar elementos de uno o más modelos de
              proceso según el perfil de riesgo del proyecto.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Representación Visual del Modelo Espiral</h2>
        <div className="bg-muted p-8 rounded-lg flex justify-center">
          <div className="relative w-full max-w-lg h-80">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-4 border-primary rounded-full flex items-center justify-center">
                <div className="w-48 h-48 border-4 border-primary rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 border-4 border-primary rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quadrant Labels */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2">
              <span className="bg-background px-2 py-1 rounded text-sm font-medium">Determinar Objetivos</span>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <span className="bg-background px-2 py-1 rounded text-sm font-medium">Análisis de Riesgos</span>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <span className="bg-background px-2 py-1 rounded text-sm font-medium">Desarrollo y Pruebas</span>
            </div>
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <span className="bg-background px-2 py-1 rounded text-sm font-medium">Planificación</span>
            </div>

            {/* Spiral Arrow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg width="200" height="200" viewBox="0 0 200 200">
                <path
                  d="M100,100 L140,60 A60,60 0 0,1 140,140 L60,140 A60,60 0 0,1 60,60 L100,100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary"
                />
                <polygon points="140,140 130,140 140,130" fill="currentColor" className="text-primary" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="fases" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="fases">Fases del Modelo</TabsTrigger>
          <TabsTrigger value="ventajas">Ventajas</TabsTrigger>
          <TabsTrigger value="desventajas">Desventajas</TabsTrigger>
        </TabsList>
        <TabsContent value="fases" className="p-4 border rounded-md mt-2">
          <h3 className="text-2xl font-bold mb-4">Las 4 Fases del Modelo Espiral</h3>
          <div className="grid gap-4">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mt-1">
                1
              </div>
              <div>
                <h4 className="text-xl font-semibold">Determinar Objetivos</h4>
                <p className="text-muted-foreground">
                  Se definen los objetivos específicos para la fase del proyecto. Se identifican las restricciones del
                  proceso y del producto, y se establece un plan detallado de gestión.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mt-1">
                2
              </div>
              <div>
                <h4 className="text-xl font-semibold">Análisis de Riesgos</h4>
                <p className="text-muted-foreground">
                  Se identifican y analizan los riesgos potenciales. Se evalúan alternativas para mitigar estos riesgos.
                  Esta fase es crucial y distingue al modelo espiral de otros modelos de desarrollo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mt-1">
                3
              </div>
              <div>
                <h4 className="text-xl font-semibold">Desarrollo y Pruebas</h4>
                <p className="text-muted-foreground">
                  Se desarrolla el producto para la iteración actual. Al final de esta fase, se realizan pruebas para
                  asegurar que el producto cumple con los requisitos definidos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mt-1">
                4
              </div>
              <div>
                <h4 className="text-xl font-semibold">Planificación</h4>
                <p className="text-muted-foreground">
                  El proyecto se revisa y se toma la decisión de continuar con el siguiente ciclo. Se planifica la
                  siguiente fase basándose en los resultados de la evaluación.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="ventajas" className="p-4 border rounded-md mt-2">
          <h3 className="text-2xl font-bold mb-4">Ventajas del Modelo Espiral</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                Estimación más realista a medida que avanza el trabajo, en lugar de una estimación inicial estática
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Los usuarios ven el sistema tempranamente debido al rápido desarrollo de prototipos</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>El desarrollo crítico de alto riesgo se realiza primero</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>El enfoque en la gestión de riesgos mejora la seguridad del sistema</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Adecuado para proyectos grandes y complejos</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Flexibilidad en los requisitos y adaptabilidad a los cambios</span>
            </li>
          </ul>
        </TabsContent>

        <TabsContent value="desventajas" className="p-4 border rounded-md mt-2">
          <h3 className="text-2xl font-bold mb-4">Desventajas del Modelo Espiral</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <XCircleIcon className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>Puede ser costoso para proyectos pequeños debido al énfasis en el análisis de riesgos</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircleIcon className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>Requiere experiencia en la evaluación de riesgos para tener éxito</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircleIcon className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>La complejidad de gestión puede ser mayor que en otros modelos</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircleIcon className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>El tiempo de desarrollo puede ser más largo debido a las múltiples iteraciones</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircleIcon className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>Documentación excesiva generada en cada fase</span>
            </li>
          </ul>
        </TabsContent>
      </Tabs>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Cuándo Utilizar el Modelo Espiral</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso Ideales</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRightIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Proyectos grandes, complejos y de alto riesgo</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRightIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Cuando los requisitos no están claramente definidos o pueden cambiar</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRightIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Proyectos con múltiples partes interesadas y necesidades diversas</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRightIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Desarrollo de nuevos productos donde el mercado es incierto</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ejemplos de Aplicación</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRightIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Sistemas de defensa y aeroespaciales</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRightIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Grandes sistemas de información empresarial</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRightIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Sistemas críticos donde el costo de fallos es alto</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRightIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Proyectos de investigación y desarrollo con innovación</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Alert className="mb-8">
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Nota importante</AlertTitle>
        <AlertDescription>
          El modelo espiral no es una panacea para todos los proyectos de software. Su aplicación debe ser evaluada
          cuidadosamente según las características específicas del proyecto, el equipo y la organización.
        </AlertDescription>
      </Alert>

      <footer className="text-center text-muted-foreground">
        <p>
          El modelo espiral sigue siendo relevante en la actualidad, especialmente cuando se combina con prácticas
          ágiles modernas para crear enfoques híbridos que aprovechan lo mejor de ambos mundos.
        </p>
      </footer>
    </div>
  )
}

