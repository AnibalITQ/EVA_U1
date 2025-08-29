"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  InfoIcon,
  Users as UsersIcon,
  Gift as GiftIcon,
  Send as SendIcon,
  Handshake as HandshakeIcon,
  DollarSign as DollarSignIcon,
  Boxes as BoxesIcon,
  Activity as ActivityIcon,
  Link as LinkIcon,
  CreditCard as CreditCardIcon,
  CheckCircleIcon,
  XCircleIcon
} from "lucide-react"

export default function CanvasModelPage() {
  const router = useRouter()
    // Navegación
  const navigateToScrum = () => router.push("/scrum")
  const navigateToHome = () => router.push("/")
  const navigateToLanguajes = () => router.push("/lenguajes")
  const navigateToCicloVsGestion = () => router.push("/ciclo-vs-gestion")
  const navigateToCanvas = () => router.push("/canvas")
  return (
    <div className="container mx-auto px-4 py-8">
              {/* Botones de navegación */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button onClick={navigateToHome} className="px-4 py-2 border rounded">Regresar a la pagina principal</button>
          <button onClick={navigateToScrum} className="px-4 py-2 border rounded">Metodología Scrum</button>
          <button onClick={navigateToLanguajes} className="px-4 py-2 border rounded">Lenguajes de Programación</button>
          <button
            onClick={navigateToCicloVsGestion}
            className="px-4 py-2 border rounded"
          >
            Ciclo vs Gestión
          </button>
          <button onClick={navigateToCanvas} className="px-4 py-2 border rounded bg-primary text-primary-foreground">Modelo Canvas</button>
        </div>
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Modelo Canvas (Business Model Canvas)</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          El <strong>Modelo Canvas</strong> es una herramienta visual para diseñar, describir y comunicar modelos de
          negocio en una sola página. Divide el negocio en <strong>nueve bloques</strong> que muestran cómo una
          organización crea, entrega y captura valor.
        </p>
      </header>

      {/* Definición / Origen / Propósito */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>¿Qué es?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Es un lienzo estratégico compuesto por nueve bloques que permiten entender de forma integral la
              propuesta de valor, la infraestructura, los clientes y las finanzas de un modelo de negocio.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Origen</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Propuesto por <strong>Alexander Osterwalder</strong> e <strong>Yves Pigneur</strong>, popularizado en
              <em> Business Model Generation</em>. Hoy es un estándar para emprendedores, productos y equipos de
              innovación.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>¿Para qué sirve?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Alinear equipos, explorar hipótesis, comparar alternativas, comunicar el modelo a stakeholders y guiar
              la ejecución y el aprendizaje (especialmente junto con métodos ágiles/lean).
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Representación visual tipo Canvas */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Representación Visual del Canvas</h2>

        {/* Grid inspirado en el layout clásico del BMC */}
        <div className="grid gap-4 bg-muted/50 p-4 rounded-lg
                        md:grid-cols-6 md:auto-rows-fr">
          {/* Columna izquierda (Socios, Actividades, Recursos) */}
          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-center gap-2">
              <LinkIcon className="h-5 w-5 text-primary" />
              <CardTitle>Socios Clave</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>Alianzas estratégicas y proveedores críticos.</li>
                <li>¿Quién nos ayuda a operar o escalar?</li>
                <li>Motivaciones: optimización, reducción de riesgo, recursos.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-center gap-2">
              <ActivityIcon className="h-5 w-5 text-primary" />
              <CardTitle>Actividades Clave</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>Lo esencial que debemos hacer para entregar valor.</li>
                <li>Ej.: desarrollo, marketing, logística, soporte.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-center gap-2">
              <BoxesIcon className="h-5 w-5 text-primary" />
              <CardTitle>Recursos Clave</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>Activos estratégicos: humanos, físicos, intelectuales, financieros.</li>
                <li>¿Qué recursos permiten nuestra propuesta de valor?</li>
              </ul>
            </CardContent>
          </Card>

          {/* Centro (Propuesta de Valor) ancho */}
          <Card className="md:col-span-2 md:row-span-2 md:col-start-3">
            <CardHeader className="flex flex-row items-center gap-2">
              <GiftIcon className="h-5 w-5 text-primary" />
              <CardTitle>Propuestas de Valor</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p className="mb-2">
                Beneficios y “trabajos por hacer” que resolvemos para segmentos específicos.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Valor funcional, emocional, social.</li>
                <li>Diferenciadores: novedad, desempeño, personalización, precio, conveniencia, marca.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Derecha alta (Relaciones, Canales) */}
          <Card className="md:col-span-2 md:col-start-5">
            <CardHeader className="flex flex-row items-center gap-2">
              <HandshakeIcon className="h-5 w-5 text-primary" />
              <CardTitle>Relaciones con Clientes</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>Tipo de relación: autoservicio, asistencia personal, comunidades, co-creación.</li>
                <li>Coste y expectativas a lo largo del ciclo de vida.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 md:col-start-5">
            <CardHeader className="flex flex-row items-center gap-2">
              <SendIcon className="h-5 w-5 text-primary" />
              <CardTitle>Canales</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>Cómo informamos, vendemos y entregamos valor.</li>
                <li>Propios/externos; online/offline; etapas: awareness → compra → postventa.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Derecha baja (Segmentos) */}
          <Card className="md:col-span-2 md:col-start-5">
            <CardHeader className="flex flex-row items-center gap-2">
              <UsersIcon className="h-5 w-5 text-primary" />
              <CardTitle>Segmentos de Clientes</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>Conjuntos de clientes con necesidades, comportamientos y disposiciones a pagar distintas.</li>
                <li>Masivo, nicho, multilateral, diversificado.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Pie (Costos e Ingresos) */}
          <Card className="md:col-span-3 md:col-start-1">
            <CardHeader className="flex flex-row items-center gap-2">
              <CreditCardIcon className="h-5 w-5 text-primary" />
              <CardTitle>Estructura de Costos</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>Costos fijos/variables, economías de escala/alcance.</li>
                <li>¿Somos más orientados a costos o a valor?</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="md:col-span-3 md:col-start-4">
            <CardHeader className="flex flex-row items-center gap-2">
              <DollarSignIcon className="h-5 w-5 text-primary" />
              <CardTitle>Fuentes de Ingresos</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>¿Por qué paga el cliente y cómo cobramos? (venta, suscripción, uso, licencias, comisión, ads).</li>
                <li>Precio fijo vs. dinámico; disposición a pagar; unidad económica.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Pestañas: Bloques (resumen), Ventajas, Limitaciones, Ejemplo */}
      <Tabs defaultValue="bloques" className="mb-12">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="bloques">Los 9 bloques</TabsTrigger>
          <TabsTrigger value="ventajas">Ventajas</TabsTrigger>
          <TabsTrigger value="limitaciones">Limitaciones</TabsTrigger>
          <TabsTrigger value="ejemplo">Ejemplo rápido</TabsTrigger>
        </TabsList>

        <TabsContent value="bloques" className="p-4 border rounded-md mt-2">
          <h3 className="text-2xl font-bold mb-4">Significado de cada bloque</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { t: "Segmentos de Clientes", d: "Para quién creamos valor: grupos a los que servimos." },
              { t: "Propuestas de Valor", d: "El conjunto de beneficios y soluciones que ofrecemos." },
              { t: "Canales", d: "Cómo comunicamos, vendemos y entregamos la propuesta." },
              { t: "Relaciones con Clientes", d: "Tipo de vínculo y experiencia a lo largo del ciclo." },
              { t: "Fuentes de Ingresos", d: "Cómo captura dinero el negocio por el valor entregado." },
              { t: "Recursos Clave", d: "Activos indispensables para operar y competir." },
              { t: "Actividades Clave", d: "Acciones esenciales para crear/entregar/capturar valor." },
              { t: "Socios Clave", d: "Alianzas y terceros críticos que habilitan el modelo." },
              { t: "Estructura de Costos", d: "Principales costos que sostienen el modelo." }
            ].map((b) => (
              <div key={b.t} className="p-4 rounded-lg border">
                <h4 className="text-lg font-semibold mb-1">{b.t}</h4>
                <p className="text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ventajas" className="p-4 border rounded-md mt-2">
          <h3 className="text-2xl font-bold mb-4">Ventajas</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Claridad y alineación en una sola página.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Facilita iterar hipótesis y aprender rápido (lean/ágil).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Comparación sencilla entre alternativas de modelo.</span>
            </li>
          </ul>
        </TabsContent>

        <TabsContent value="limitaciones" className="p-4 border rounded-md mt-2">
          <h3 className="text-2xl font-bold mb-4">Limitaciones</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <XCircleIcon className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>Es una foto de alto nivel: requiere métricas y planes detallados aparte.</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircleIcon className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>No sustituye el análisis financiero ni la validación con clientes.</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircleIcon className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>Puede simplificar en exceso modelos muy complejos.</span>
            </li>
          </ul>
        </TabsContent>

        <TabsContent value="ejemplo" className="p-4 border rounded-md mt-2">
          <h3 className="text-2xl font-bold mb-4">Ejemplo rápido (app de suscripción fitness)</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div className="space-y-1">
              <p><strong>Segmentos:</strong> Jóvenes 18–35 que entrenan en casa.</p>
              <p><strong>Propuesta:</strong> Rutinas guiadas personalizadas y progresivas.</p>
              <p><strong>Canales:</strong> App stores, redes sociales, web.</p>
              <p><strong>Relación:</strong> Comunidad, soporte en chat, retos mensuales.</p>
              <p><strong>Ingresos:</strong> Suscripción mensual/anual, compras in-app.</p>
            </div>
            <div className="space-y-1">
              <p><strong>Recursos:</strong> Equipo dev, contenido audiovisual, marca.</p>
              <p><strong>Actividades:</strong> Desarrollo app, producción de rutinas, marketing.</p>
              <p><strong>Socios:</strong> Influencers fitness, pasarelas de pago, CDNs.</p>
              <p><strong>Costos:</strong> Nómina, producción video, servidores, ads.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Alert className="mb-8">
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Consejo</AlertTitle>
        <AlertDescription>
          Completa el Canvas con hipótesis claras y valida cada bloque con datos reales. Itera frecuentemente: el
          aprendizaje es lo que convierte el lienzo en resultados.
        </AlertDescription>
      </Alert>

      <footer className="text-center text-muted-foreground">
        <p>
          El Modelo Canvas es más potente cuando se acompaña de métricas, experimentos y retroalimentación
          de clientes para evolucionar del papel a la tracción.
        </p>
      </footer>
    </div>
  )
}
