import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProgrammingLanguagesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              ¿Qué son los lenguajes de programación?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Los lenguajes de programación son herramientas fundamentales para el desarrollo de software.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
          <Card>
            <CardHeader>
              <CardTitle>Definición</CardTitle>
              <CardDescription>Comprendiendo los lenguajes de programación</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Los lenguajes de programación son conjuntos de reglas sintácticas y semánticas que permiten a los
                desarrolladores crear instrucciones que las computadoras pueden entender y ejecutar. Funcionan como
                intermediarios entre el pensamiento humano y el procesamiento de la máquina, permitiendo la creación de
                software.
              </p>
            </CardContent>
          </Card>

          <Tabs defaultValue="categories" className="w-full mt-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="categories">Categorías</TabsTrigger>
              <TabsTrigger value="examples">Ejemplos</TabsTrigger>
              <TabsTrigger value="usage">Usos</TabsTrigger>
            </TabsList>
            <TabsContent value="categories" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Categorías de lenguajes de programación</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Lenguajes de bajo nivel:</strong> Cercanos al lenguaje de máquina (Ensamblador, Código
                      máquina)
                    </li>
                    <li>
                      <strong>Lenguajes de alto nivel:</strong> Más cercanos al lenguaje humano (Python, JavaScript,
                      Java)
                    </li>
                    <li>
                      <strong>Lenguajes compilados:</strong> Se traducen completamente antes de ejecutarse (C, C++,
                      Rust)
                    </li>
                    <li>
                      <strong>Lenguajes interpretados:</strong> Se traducen línea por línea durante la ejecución
                      (Python, JavaScript)
                    </li>
                    <li>
                      <strong>Lenguajes de propósito general:</strong> Sirven para diversos tipos de aplicaciones
                    </li>
                    <li>
                      <strong>Lenguajes de dominio específico:</strong> Diseñados para tareas particulares (SQL, R)
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="examples" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Ejemplos populares</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Desarrollo Web</h3>
                      <ul className="list-disc pl-5">
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>PHP</li>
                        <li>Ruby</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Desarrollo de Aplicaciones</h3>
                      <ul className="list-disc pl-5">
                        <li>Java</li>
                        <li>C#</li>
                        <li>Swift</li>
                        <li>Kotlin</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Ciencia de Datos</h3>
                      <ul className="list-disc pl-5">
                        <li>Python</li>
                        <li>R</li>
                        <li>Julia</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Sistemas y Rendimiento</h3>
                      <ul className="list-disc pl-5">
                        <li>C</li>
                        <li>C++</li>
                        <li>Rust</li>
                        <li>Go</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="usage" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Aplicaciones en el desarrollo de software</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Los lenguajes de programación se utilizan para desarrollar todo tipo de software:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Aplicaciones web y sitios web</li>
                    <li>Aplicaciones móviles para iOS y Android</li>
                    <li>Software de escritorio</li>
                    <li>Sistemas operativos</li>
                    <li>Videojuegos</li>
                    <li>Software empresarial</li>
                    <li>Inteligencia artificial y aprendizaje automático</li>
                    <li>Análisis de datos y visualización</li>
                    <li>Internet de las cosas (IoT)</li>
                    <li>Sistemas embebidos</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Evolución constante</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Los lenguajes de programación continúan evolucionando para adaptarse a las nuevas necesidades
                tecnológicas. Cada lenguaje tiene sus fortalezas y debilidades, y la elección del lenguaje adecuado
                depende del tipo de proyecto, requisitos de rendimiento, ecosistema, y preferencias del equipo de
                desarrollo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

