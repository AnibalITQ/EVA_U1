import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  ClipboardList,
  Calendar,
  User,
  Users2,
  UserCog,
  ListTodo,
  BarChart3,
  LineChart,
  Clock,
  CalendarDays,
  CalendarClock,
  CalendarCheck,
  CalendarRange,
} from "lucide-react"

export default function ScrumGuidePage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-block p-2 bg-primary/10 rounded-full mb-4">
          <Users className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Guía de Scrum</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Scrum es un marco de trabajo ágil que ayuda a las personas y equipos a entregar valor de forma iterativa e
          incremental.
        </p>
      </div>

      <Tabs defaultValue="roles" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="roles" className="flex items-center gap-2">
            <Users2 className="h-4 w-4" />
            <span>Roles</span>
          </TabsTrigger>
          <TabsTrigger value="artifacts" className="flex items-center gap-2">
            <ClipboardList className="h-4 w-4" />
            <span>Artefactos</span>
          </TabsTrigger>
          <TabsTrigger value="events" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Eventos</span>
          </TabsTrigger>
        </TabsList>

        {/* Roles Section */}
        <TabsContent value="roles" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <UserCog className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Scrum Master</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Responsable de promover y apoyar Scrum. Ayuda a todos a entender la teoría, prácticas y reglas de
                  Scrum. Actúa como un líder servidor para el equipo Scrum y la organización.
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                  <li>Facilita los eventos de Scrum</li>
                  <li>Elimina impedimentos</li>
                  <li>Entrena al equipo en autogestión</li>
                  <li>Ayuda a la organización a adoptar Scrum</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Product Owner</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Responsable de maximizar el valor del producto resultante del trabajo del equipo. Gestiona el Product
                  Backlog y asegura que sea visible, transparente y claro.
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                  <li>Define y prioriza el Product Backlog</li>
                  <li>Representa a los stakeholders</li>
                  <li>Acepta o rechaza el trabajo realizado</li>
                  <li>Comunica la visión del producto</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Equipo de Desarrollo</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Profesionales que realizan el trabajo de entregar un incremento de producto &quot;Terminado&quot; que
                  potencialmente se pueda poner en producción al final de cada Sprint.
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                  <li>Autoorganizados y multifuncionales</li>
                  <li>Responsables colectivamente del incremento</li>
                  <li>No hay sub-equipos ni títulos</li>
                  <li>Tamaño óptimo: 3-9 personas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Artifacts Section */}
        <TabsContent value="artifacts" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <ListTodo className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Product Backlog</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Lista ordenada de todo lo que se conoce que es necesario en el producto. Es la única fuente de
                  requisitos para cualquier cambio a realizarse en el producto.
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                  <li>Gestionado por el Product Owner</li>
                  <li>Dinámico y en constante evolución</li>
                  <li>Ordenado por valor, riesgo y dependencias</li>
                  <li>Contiene historias de usuario, bugs, tareas técnicas</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Sprint Backlog</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Conjunto de elementos del Product Backlog seleccionados para el Sprint, más un plan para entregar el
                  Incremento de producto y conseguir el Objetivo del Sprint.
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                  <li>Previsión del equipo sobre la funcionalidad</li>
                  <li>Hace visible todo el trabajo necesario</li>
                  <li>Actualizado durante el Sprint</li>
                  <li>Solo modificable por el Equipo de Desarrollo</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <LineChart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Incremento</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Suma de todos los elementos del Product Backlog completados durante un Sprint y el valor de los
                  incrementos de todos los Sprints anteriores.
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                  <li>Debe estar en condición utilizable</li>
                  <li>Debe cumplir la Definición de &quot;Terminado&quot;</li>
                  <li>Debe ser inspeccionable al final del Sprint</li>
                  <li>Representa un paso hacia una visión o meta</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Events Section */}
        <TabsContent value="events" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <CalendarRange className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Sprint</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Bloque de tiempo (time-box) de un mes o menos durante el cual se crea un incremento de producto
                  &quot;Terminado&quot; utilizable y potencialmente desplegable.
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                  <li>Duración consistente durante el desarrollo</li>
                  <li>Un nuevo Sprint comienza inmediatamente después</li>
                  <li>Contiene y consiste de los demás eventos</li>
                  <li>Duración típica: 2-4 semanas</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <CalendarClock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Sprint Planning</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Reunión donde se planifica el trabajo a realizar durante el Sprint. Este plan se crea mediante el
                  trabajo colaborativo de todo el Equipo Scrum.
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                  <li>Time-box: 8 horas para un Sprint de un mes</li>
                  <li>Responde a: ¿Qué puede entregarse? y ¿Cómo se conseguirá?</li>
                  <li>Define el Objetivo del Sprint</li>
                  <li>Crea el Sprint Backlog</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Daily Scrum</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Evento de 15 minutos para que el Equipo de Desarrollo sincronice actividades y cree un plan para las
                  siguientes 24 horas.
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                  <li>Se realiza a la misma hora y lugar cada día</li>
                  <li>Responde a: ¿Qué hice ayer? ¿Qué haré hoy? ¿Tengo impedimentos?</li>
                  <li>Optimiza la colaboración del equipo</li>
                  <li>Dirigido por el Equipo de Desarrollo</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <CalendarCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Sprint Review</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Reunión que se realiza al final del Sprint para inspeccionar el Incremento y adaptar el Product
                  Backlog si fuese necesario.
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                  <li>Time-box: 4 horas para un Sprint de un mes</li>
                  <li>Demostración del trabajo completado</li>
                  <li>Colaboración sobre lo que se ha hecho y lo que viene</li>
                  <li>Participan el Equipo Scrum y stakeholders</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <CalendarDays className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Sprint Retrospective</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Oportunidad para que el Equipo Scrum se inspeccione a sí mismo y cree un plan de mejoras para ejecutar
                  durante el siguiente Sprint.
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                  <li>Time-box: 3 horas para un Sprint de un mes</li>
                  <li>Analiza: personas, relaciones, procesos y herramientas</li>
                  <li>Identifica mejoras para implementar</li>
                  <li>Ocurre después del Sprint Review y antes del siguiente Sprint Planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <ListTodo className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Refinamiento del Backlog</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Actividad continua en la que se añaden detalles, estimaciones y orden a los elementos del Product
                  Backlog.
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                  <li>No es un evento oficial pero es una práctica común</li>
                  <li>Normalmente consume no más del 10% del tiempo del equipo</li>
                  <li>Prepara elementos para futuros Sprints</li>
                  <li>Participan Product Owner y Equipo de Desarrollo</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 text-center">
        <p className="text-muted-foreground">
          Scrum es un marco de trabajo liviano que ayuda a las personas, equipos y organizaciones a generar valor a
          través de soluciones adaptativas para problemas complejos.
        </p>
      </div>
    </div>
  )
}