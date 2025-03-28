import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"

export default function DatabaseTheoretical() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Marco Teórico: Sistemas de Gestión de Bases de Datos
            </h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Fundamentos teóricos de los manejadores de bases de datos, normalización y el modelo relacional
            </p>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle>Introducción</CardTitle>
            <CardDescription>Bases conceptuales de los sistemas de gestión de datos</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Los sistemas de gestión de bases de datos (SGBD) son software diseñado para definir, manipular, recuperar
              y administrar datos en una base de datos. Estos sistemas proporcionan una interfaz sistemática entre los
              usuarios, las aplicaciones y la base de datos, permitiendo operaciones complejas con los datos mientras
              mantienen su integridad y seguridad.
            </p>
            <p className="text-muted-foreground">
              El modelo relacional, introducido por Edgar F. Codd en 1970, revolucionó la forma en que se estructuran y
              consultan los datos. Este modelo, junto con el proceso de normalización, establece las bases teóricas para
              el diseño eficiente de bases de datos que minimizan la redundancia y maximizan la integridad de los datos.
            </p>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="dbms" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="dbms">Manejadores de Bases de Datos</TabsTrigger>
            <TabsTrigger value="normalization">Normalización y Modelo Relacional</TabsTrigger>
          </TabsList>

          {/* DBMS Section */}
          <TabsContent value="dbms" className="mt-6 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Sistemas de Gestión de Bases de Datos (SGBD)</CardTitle>
                <CardDescription>Definición, características y tipos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Definición y Propósito</h3>
                    <p className="text-muted-foreground">
                      Un Sistema de Gestión de Bases de Datos (SGBD) es un software que permite la creación, gestión y
                      administración de bases de datos, así como la elección y manejo de las estructuras necesarias para
                      el almacenamiento y búsqueda de información. Actúa como intermediario entre el usuario, las
                      aplicaciones y la base de datos física.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Características Fundamentales</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>
                        <strong>Independencia de datos:</strong> Separación entre datos y aplicaciones
                      </li>
                      <li>
                        <strong>Redundancia mínima:</strong> Control de duplicación de información
                      </li>
                      <li>
                        <strong>Consistencia:</strong> Mantenimiento de la integridad de los datos
                      </li>
                      <li>
                        <strong>Seguridad:</strong> Control de acceso y protección de datos
                      </li>
                      <li>
                        <strong>Concurrencia:</strong> Acceso simultáneo por múltiples usuarios
                      </li>
                      <li>
                        <strong>Recuperación:</strong> Mecanismos para restaurar datos tras fallos
                      </li>
                      <li>
                        <strong>Cumplimiento ACID:</strong> Atomicidad, Consistencia, Aislamiento y Durabilidad en
                        transacciones
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Tipos de SGBD</h3>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Tipo</TableHead>
                            <TableHead>Características</TableHead>
                            <TableHead>Ejemplos</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Relacionales (SQL)</TableCell>
                            <TableCell>Basados en tablas relacionadas, esquema fijo, consultas SQL</TableCell>
                            <TableCell>MySQL, PostgreSQL, Oracle, SQL Server</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">No Relacionales (NoSQL)</TableCell>
                            <TableCell>Esquema flexible, escalabilidad horizontal, diversos modelos de datos</TableCell>
                            <TableCell>MongoDB, Cassandra, Redis, Neo4j</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Orientados a Objetos</TableCell>
                            <TableCell>Almacenan objetos directamente, herencia, encapsulamiento</TableCell>
                            <TableCell>ObjectDB, db4o</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">En Memoria</TableCell>
                            <TableCell>Almacenamiento en RAM, alto rendimiento, volatilidad</TableCell>
                            <TableCell>Redis, Memcached</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Arquitectura de los SGBD</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Componentes Principales</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>
                        <strong>Motor de almacenamiento:</strong> Gestiona cómo se almacenan y recuperan los datos
                      </li>
                      <li>
                        <strong>Procesador de consultas:</strong> Analiza, optimiza y ejecuta consultas
                      </li>
                      <li>
                        <strong>Gestor de transacciones:</strong> Garantiza la integridad de las operaciones
                      </li>
                      <li>
                        <strong>Gestor de buffer:</strong> Optimiza el acceso a datos frecuentes
                      </li>
                      <li>
                        <strong>Gestor de seguridad:</strong> Controla permisos y accesos
                      </li>
                      <li>
                        <strong>Diccionario de datos:</strong> Almacena metadatos sobre la estructura de la base de
                        datos
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Niveles de Arquitectura</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>
                        <strong>Nivel externo:</strong> Vistas de usuario, cómo los usuarios perciben los datos
                      </li>
                      <li>
                        <strong>Nivel conceptual:</strong> Estructura lógica global de la base de datos
                      </li>
                      <li>
                        <strong>Nivel interno:</strong> Estructura física, cómo se almacenan realmente los datos
                      </li>
                    </ul>
                    <div className="mt-4 flex justify-center">
                      <div className="relative h-64 w-full max-w-md border rounded-md overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=256&width=400"
                          alt="Arquitectura de tres niveles de un SGBD"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lenguajes y Funciones de los SGBD</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="ddl">
                    <AccordionTrigger>Lenguaje de Definición de Datos (DDL)</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2 text-muted-foreground">
                        Permite definir y modificar la estructura de los objetos de la base de datos.
                      </p>
                      <div className="bg-slate-100 p-3 rounded-md">
                        <pre className="text-sm">
                          <code>{`-- Ejemplo de comandos DDL
CREATE TABLE Empleados (
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    departamento_id INT,
    FOREIGN KEY (departamento_id) REFERENCES Departamentos(id)
);

ALTER TABLE Empleados ADD COLUMN salario DECIMAL(10,2);

DROP TABLE Empleados;`}</code>
                        </pre>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="dml">
                    <AccordionTrigger>Lenguaje de Manipulación de Datos (DML)</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2 text-muted-foreground">
                        Permite realizar operaciones de manipulación de datos como inserción, actualización y
                        eliminación.
                      </p>
                      <div className="bg-slate-100 p-3 rounded-md">
                        <pre className="text-sm">
                          <code>{`-- Ejemplo de comandos DML
INSERT INTO Empleados (id, nombre, departamento_id) 
VALUES (1, 'Ana García', 2);

UPDATE Empleados 
SET salario = 3500 
WHERE id = 1;

DELETE FROM Empleados 
WHERE id = 1;`}</code>
                        </pre>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="dcl">
                    <AccordionTrigger>Lenguaje de Control de Datos (DCL)</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2 text-muted-foreground">
                        Permite controlar los aspectos de autorización de datos y licencias de usuarios.
                      </p>
                      <div className="bg-slate-100 p-3 rounded-md">
                        <pre className="text-sm">
                          <code>{`-- Ejemplo de comandos DCL
GRANT SELECT, INSERT ON Empleados TO usuario_rh;

REVOKE DELETE ON Empleados FROM usuario_rh;`}</code>
                        </pre>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="tcl">
                    <AccordionTrigger>Lenguaje de Control de Transacciones (TCL)</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2 text-muted-foreground">
                        Permite controlar las transacciones en la base de datos.
                      </p>
                      <div className="bg-slate-100 p-3 rounded-md">
                        <pre className="text-sm">
                          <code>{`-- Ejemplo de comandos TCL
BEGIN TRANSACTION;
    UPDATE Cuentas SET saldo = saldo - 1000 WHERE id = 1;
    UPDATE Cuentas SET saldo = saldo + 1000 WHERE id = 2;
COMMIT;

-- En caso de error
ROLLBACK;`}</code>
                        </pre>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Normalization Section */}
          <TabsContent value="normalization" className="mt-6 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>El Modelo Relacional</CardTitle>
                <CardDescription>Fundamentos teóricos y componentes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Orígenes y Definición</h3>
                    <p className="text-muted-foreground">
                      El modelo relacional fue propuesto por Edgar F. Codd en 1970 mientras trabajaba para IBM. Este
                      modelo representa la base de datos como una colección de relaciones, donde cada relación es una
                      tabla compuesta por filas y columnas. El modelo relacional se fundamenta en la teoría matemática
                      de conjuntos y la lógica de predicados de primer orden. [^1]
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Componentes Fundamentales</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>
                        <strong>Relación (Tabla):</strong> Conjunto de tuplas que representan entidades o relaciones
                        entre entidades
                      </li>
                      <li>
                        <strong>Tupla (Fila):</strong> Representa una instancia específica de una entidad
                      </li>
                      <li>
                        <strong>Atributo (Columna):</strong> Representa una propiedad de la entidad
                      </li>
                      <li>
                        <strong>Dominio:</strong> Conjunto de valores permitidos para un atributo
                      </li>
                      <li>
                        <strong>Clave primaria:</strong> Atributo o conjunto de atributos que identifican de manera
                        única cada tupla
                      </li>
                      <li>
                        <strong>Clave foránea:</strong> Atributo o conjunto de atributos que referencian a una clave
                        primaria en otra relación
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Propiedades del Modelo Relacional</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>
                        <strong>Atomicidad de valores:</strong> Cada valor en una tupla es atómico (indivisible)
                      </li>
                      <li>
                        <strong>Orden de tuplas irrelevante:</strong> El orden de las filas no afecta la semántica
                      </li>
                      <li>
                        <strong>Orden de atributos irrelevante:</strong> El orden de las columnas no afecta la semántica
                      </li>
                      <li>
                        <strong>Valores únicos:</strong> No pueden existir tuplas duplicadas
                      </li>
                      <li>
                        <strong>Integridad de entidad:</strong> Ningún componente de la clave primaria puede ser nulo
                      </li>
                      <li>
                        <strong>Integridad referencial:</strong> Las claves foráneas deben hacer referencia a tuplas
                        existentes
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Normalización de Bases de Datos</CardTitle>
                <CardDescription>Proceso y formas normales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Concepto y Objetivos</h3>
                    <p className="text-muted-foreground">
                      La normalización es un proceso sistemático que se aplica a las bases de datos relacionales para
                      eliminar la redundancia de datos, reducir anomalías de actualización y mejorar la integridad de
                      los datos. Este proceso descompone las relaciones complejas en relaciones más simples y estables
                      mediante la aplicación de reglas denominadas "formas normales".
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Formas Normales</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="1nf">
                        <AccordionTrigger>Primera Forma Normal (1NF)</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2 text-muted-foreground">Una relación está en 1NF si:</p>
                          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-3">
                            <li>Todos los atributos contienen valores atómicos (indivisibles)</li>
                            <li>No hay grupos repetitivos o arreglos</li>
                            <li>Existe una clave primaria que identifica cada fila</li>
                          </ul>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="font-semibold mb-1">Antes de 1NF:</p>
                              <div className="overflow-x-auto">
                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead>Estudiante</TableHead>
                                      <TableHead>Cursos</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell>Juan</TableCell>
                                      <TableCell>Matemáticas, Física</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>María</TableCell>
                                      <TableCell>Química, Biología, Historia</TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </div>
                            </div>
                            <div>
                              <p className="font-semibold mb-1">Después de 1NF:</p>
                              <div className="overflow-x-auto">
                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead>Estudiante</TableHead>
                                      <TableHead>Curso</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell>Juan</TableCell>
                                      <TableCell>Matemáticas</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>Juan</TableCell>
                                      <TableCell>Física</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>María</TableCell>
                                      <TableCell>Química</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>María</TableCell>
                                      <TableCell>Biología</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>María</TableCell>
                                      <TableCell>Historia</TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="2nf">
                        <AccordionTrigger>Segunda Forma Normal (2NF)</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2 text-muted-foreground">Una relación está en 2NF si:</p>
                          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-3">
                            <li>Está en 1NF</li>
                            <li>
                              Todos los atributos no clave dependen completamente de la clave primaria (no hay
                              dependencias parciales)
                            </li>
                          </ul>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="font-semibold mb-1">Antes de 2NF:</p>
                              <div className="overflow-x-auto">
                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead>Estudiante_ID</TableHead>
                                      <TableHead>Curso_ID</TableHead>
                                      <TableHead>Estudiante_Nombre</TableHead>
                                      <TableHead>Curso_Nombre</TableHead>
                                      <TableHead>Calificación</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell>1</TableCell>
                                      <TableCell>101</TableCell>
                                      <TableCell>Juan</TableCell>
                                      <TableCell>Matemáticas</TableCell>
                                      <TableCell>85</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>1</TableCell>
                                      <TableCell>102</TableCell>
                                      <TableCell>Juan</TableCell>
                                      <TableCell>Física</TableCell>
                                      <TableCell>90</TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </div>
                            </div>
                            <div>
                              <p className="font-semibold mb-1">Después de 2NF:</p>
                              <p className="text-sm mb-1">Tabla Estudiantes:</p>
                              <div className="overflow-x-auto mb-2">
                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead>Estudiante_ID</TableHead>
                                      <TableHead>Estudiante_Nombre</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell>1</TableCell>
                                      <TableCell>Juan</TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </div>
                              <p className="text-sm mb-1">Tabla Cursos:</p>
                              <div className="overflow-x-auto mb-2">
                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead>Curso_ID</TableHead>
                                      <TableHead>Curso_Nombre</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell>101</TableCell>
                                      <TableCell>Matemáticas</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>102</TableCell>
                                      <TableCell>Física</TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </div>
                              <p className="text-sm mb-1">Tabla Inscripciones:</p>
                              <div className="overflow-x-auto">
                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead>Estudiante_ID</TableHead>
                                      <TableHead>Curso_ID</TableHead>
                                      <TableHead>Calificación</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell>1</TableCell>
                                      <TableCell>101</TableCell>
                                      <TableCell>85</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>1</TableCell>
                                      <TableCell>102</TableCell>
                                      <TableCell>90</TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="3nf">
                        <AccordionTrigger>Tercera Forma Normal (3NF)</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2 text-muted-foreground">Una relación está en 3NF si:</p>
                          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-3">
                            <li>Está en 2NF</li>
                            <li>
                              No existen dependencias transitivas (atributos no clave que dependen de otros atributos no
                              clave)
                            </li>
                          </ul>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="font-semibold mb-1">Antes de 3NF:</p>
                              <div className="overflow-x-auto">
                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead>Estudiante_ID</TableHead>
                                      <TableHead>Departamento_ID</TableHead>
                                      <TableHead>Departamento_Nombre</TableHead>
                                      <TableHead>Decano</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell>1</TableCell>
                                      <TableCell>10</TableCell>
                                      <TableCell>Ciencias</TableCell>
                                      <TableCell>Dr. Pérez</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>2</TableCell>
                                      <TableCell>10</TableCell>
                                      <TableCell>Ciencias</TableCell>
                                      <TableCell>Dr. Pérez</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>3</TableCell>
                                      <TableCell>20</TableCell>
                                      <TableCell>Humanidades</TableCell>
                                      <TableCell>Dra. Gómez</TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </div>
                            </div>
                            <div>
                              <p className="font-semibold mb-1">Después de 3NF:</p>
                              <p className="text-sm mb-1">Tabla Estudiantes:</p>
                              <div className="overflow-x-auto mb-2">
                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead>Estudiante_ID</TableHead>
                                      <TableHead>Departamento_ID</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell>1</TableCell>
                                      <TableCell>10</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>2</TableCell>
                                      <TableCell>10</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>3</TableCell>
                                      <TableCell>20</TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </div>
                              <p className="text-sm mb-1">Tabla Departamentos:</p>
                              <div className="overflow-x-auto">
                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead>Departamento_ID</TableHead>
                                      <TableHead>Departamento_Nombre</TableHead>
                                      <TableHead>Decano</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell>10</TableCell>
                                      <TableCell>Ciencias</TableCell>
                                      <TableCell>Dr. Pérez</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>20</TableCell>
                                      <TableCell>Humanidades</TableCell>
                                      <TableCell>Dra. Gómez</TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="bcnf">
                        <AccordionTrigger>Forma Normal de Boyce-Codd (BCNF)</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2 text-muted-foreground">Una relación está en BCNF si:</p>
                          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-3">
                            <li>Está en 3NF</li>
                            <li>
                              Para cada dependencia funcional X → Y, X debe ser una superclave (es decir, cada
                              determinante debe ser una clave candidata)
                            </li>
                          </ul>
                          <p className="text-muted-foreground mb-2">
                            BCNF es una forma más estricta de 3NF que elimina ciertas anomalías que pueden persistir en
                            3NF.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="4nf">
                        <AccordionTrigger>Cuarta Forma Normal (4NF)</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2 text-muted-foreground">Una relación está en 4NF si:</p>
                          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-3">
                            <li>Está en BCNF</li>
                            <li>No contiene dependencias multivaluadas no triviales</li>
                          </ul>
                          <p className="text-muted-foreground">
                            4NF trata con dependencias multivaluadas, que ocurren cuando un atributo determina múltiples
                            valores independientes de otro atributo.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="5nf">
                        <AccordionTrigger>Quinta Forma Normal (5NF)</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2 text-muted-foreground">Una relación está en 5NF si:</p>
                          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-3">
                            <li>Está en 4NF</li>
                            <li>
                              No contiene dependencias de join no triviales que no sean implicadas por las claves
                              candidatas
                            </li>
                          </ul>
                          <p className="text-muted-foreground">
                            5NF, también conocida como forma normal de proyección-join (PJNF), trata con las
                            dependencias de join, que son más complejas y menos comunes en la práctica.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Beneficios de la Normalización</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>
                        <strong>Reducción de redundancia:</strong> Minimiza la duplicación de datos
                      </li>
                      <li>
                        <strong>Prevención de anomalías:</strong> Evita problemas de inserción, actualización y
                        eliminación
                      </li>
                      <li>
                        <strong>Mejora de la integridad:</strong> Facilita el mantenimiento de la consistencia de los
                        datos
                      </li>
                      <li>
                        <strong>Optimización de consultas:</strong> Puede mejorar el rendimiento de ciertas consultas
                      </li>
                      <li>
                        <strong>Flexibilidad del esquema:</strong> Facilita la evolución y modificación de la estructura
                        de la base de datos
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Consideraciones Prácticas</h3>
                    <p className="text-muted-foreground mb-2">
                      Aunque la normalización ofrece muchos beneficios, en ciertos casos puede ser necesario
                      desnormalizar (combinar tablas) por razones de rendimiento. La desnormalización puede ser
                      apropiada cuando:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Las consultas de lectura son mucho más frecuentes que las operaciones de escritura</li>
                      <li>Se requiere un alto rendimiento para consultas complejas que involucran múltiples joins</li>
                      <li>Los datos rara vez cambian</li>
                      <li>La aplicación puede manejar la integridad de los datos redundantes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Implementación del Modelo Relacional</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Diseño de Esquemas Relacionales</h3>
                    <p className="text-muted-foreground mb-4">
                      El diseño de esquemas relacionales implica la traducción de un modelo conceptual (como un diagrama
                      entidad-relación) a un conjunto de tablas normalizadas. Este proceso incluye:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                      <li>Identificar entidades y sus atributos</li>
                      <li>Determinar relaciones entre entidades</li>
                      <li>Definir claves primarias y foráneas</li>
                      <li>Aplicar normalización para optimizar el diseño</li>
                      <li>Implementar restricciones de integridad</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Ejemplo de Implementación</h3>
                    <div className="bg-slate-100 p-3 rounded-md">
                      <pre className="text-sm">
                        <code>{`-- Creación de tablas normalizadas
CREATE TABLE Departamentos (
    departamento_id INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ubicacion VARCHAR(100),
    director_id INT
);

CREATE TABLE Empleados (
    empleado_id INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    fecha_contratacion DATE,
    salario DECIMAL(10,2),
    departamento_id INT,
    FOREIGN KEY (departamento_id) REFERENCES Departamentos(departamento_id)
);

CREATE TABLE Proyectos (
    proyecto_id INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    fecha_inicio DATE,
    fecha_fin DATE,
    presupuesto DECIMAL(12,2)
);

CREATE TABLE Asignaciones (
    empleado_id INT,
    proyecto_id INT,
    fecha_asignacion DATE,
    rol VARCHAR(50),
    PRIMARY KEY (empleado_id, proyecto_id),
    FOREIGN KEY (empleado_id) REFERENCES Empleados(empleado_id),
    FOREIGN KEY (proyecto_id) REFERENCES Proyectos(proyecto_id)
);

-- Actualización de la referencia circular
ALTER TABLE Departamentos
ADD CONSTRAINT fk_director
FOREIGN KEY (director_id) REFERENCES Empleados(empleado_id);`}</code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Herramientas de Modelado</h3>
                    <p className="text-muted-foreground">
                      Existen diversas herramientas que facilitan el diseño y la implementación de bases de datos
                      relacionales:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>
                        <strong>Herramientas CASE:</strong> MySQL Workbench, Oracle SQL Developer Data Modeler
                      </li>
                      <li>
                        <strong>Herramientas de diagramación:</strong> Lucidchart, draw.io, ERDPlus
                      </li>
                      <li>
                        <strong>Herramientas de ingeniería inversa:</strong> Para generar modelos a partir de bases de
                        datos existentes
                      </li>
                      <li>
                        <strong>Herramientas de migración:</strong> Para transferir esquemas entre diferentes SGBD
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

