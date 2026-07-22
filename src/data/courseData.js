// ─────────────────────────────────────────────────
// Course structure & content for Kotlin Android Dev
// ─────────────────────────────────────────────────

export const courseTitle = 'Kotlin para Android';
export const courseSubtitle = 'Programación Móvil I — El lenguaje detrás de Android.';

export const modules = [
  {
    id: 'intro',
    label: '🏠 Intro',
    type: 'intro',
    slides: ['intro'],
  },
  {
    id: 'modulo1',
    label: 'MÓDULO I',
    sessions: [
      {
        id: 's1',
        label: 'Sesión 1',
        topics: [
          { id: 'sintaxis', label: 'Sintaxis' },
          { id: 'tipos', label: 'Tipos de datos' },
          { id: 'null-safety', label: 'Null Safety' },
          { id: 'ejercicios-s1', label: 'Ejercicios S1', isExercise: true },
        ],
      },
      {
        id: 's2',
        label: 'Sesión 2',
        topics: [
          { id: 'funciones', label: 'Funciones' },
          { id: 'lambdas', label: 'Lambdas' },
          { id: 'control-flow', label: 'Control Flow' },
          { id: 'ejercicios-s2', label: 'Ejercicios S2', isExercise: true },
        ],
      },
      {
        id: 's3',
        label: 'Sesión 3',
        topics: [
          { id: 'colecciones', label: 'Colecciones' },
          { id: 'oop-basica', label: 'OOP Básica' },
          { id: 'data-classes', label: 'Data Classes' },
          { id: 'herencia', label: 'Herencia' },
          { id: 'ejercicios-s3', label: 'Ejercicios S3', isExercise: true },
        ],
      },
      {
        id: 's4',
        label: 'Sesión 4',
        topics: [
          { id: 'coroutines', label: 'Coroutines' },
          { id: 'flows', label: 'Flows' },
          { id: 'android-basics', label: 'Android Basics' },
          { id: 'resumen', label: 'Resumen Final' },
          { id: 'ejercicios-s4', label: 'Ejercicios S4', isExercise: true },
        ],
      },
    ],
  },
  {
    id: 'modulo2',
    label: 'MÓDULO II · COMPLEMENTARIO',
    sessions: [
      {
        id: 's5',
        label: 'Sesión 5',
        topics: [
          { id: 'entrada-operadores', label: 'Entrada y operadores' },
          { id: 'arrays-rangos', label: 'Arrays y rangos' },
          { id: 'excepciones', label: 'Manejo de errores' },
          { id: 'ejercicios-s5', label: 'Ejercicios S5', isExercise: true },
        ],
      },
      {
        id: 's6',
        label: 'Sesión 6',
        topics: [
          { id: 'scope-functions', label: 'Scope Functions' },
          { id: 'enums-objects', label: 'Enums y Objects' },
          { id: 'genericos', label: 'Genéricos' },
          { id: 'paquetes-visibilidad', label: 'Paquetes y visibilidad' },
          { id: 'pruebas-basicas', label: 'Pruebas básicas' },
          { id: 'ejercicios-s6', label: 'Ejercicios S6', isExercise: true },
        ],
      },
    ],
  },
  {
    id: 'proyecto',
    label: '🏆 Proyecto Final',
    type: 'special',
    topics: [{ id: 'proyecto-final', label: 'Proyecto Final' }],
  },
];

// Flat list for navigation
export const allTopicIds = [
  'intro',
  'sintaxis', 'tipos', 'null-safety', 'ejercicios-s1',
  'funciones', 'lambdas', 'control-flow', 'ejercicios-s2',
  'colecciones', 'oop-basica', 'data-classes', 'herencia', 'ejercicios-s3',
  'coroutines', 'flows', 'android-basics', 'resumen', 'ejercicios-s4',
  'entrada-operadores', 'arrays-rangos', 'excepciones', 'ejercicios-s5',
  'scope-functions', 'enums-objects', 'genericos', 'paquetes-visibilidad',
  'pruebas-basicas', 'ejercicios-s6',
  'proyecto-final',
];

// ─────────────────────────────────────────────────
// Slide content per topic
// ─────────────────────────────────────────────────

export const slides = {
  intro: {
    type: 'intro',
    title: 'Kotlin para Android',
    subtitle: 'El lenguaje moderno de Android. 4 sesiones · 19 temas · desde cero.',
    topics: [
      '01  Sintaxis & Básicos',
      '02  Tipos de datos',
      '03  Funciones & Lambdas',
      '04  Control Flow',
      '05  Colecciones',
      '06  OOP en Kotlin',
      '07  Coroutines',
      '08  Android Basics',
    ],
    tool: 'play.kotlinlang.org',
    toolUrl: 'https://play.kotlinlang.org',
  },

  sintaxis: {
    type: 'lesson',
    session: 'SESIÓN 1',
    title: 'Sintaxis de Kotlin',
    intro: 'Kotlin es un lenguaje moderno, conciso y 100% interoperable con Java. Se usa como lenguaje oficial de Android.',
    blocks: [
      {
        kind: 'code',
        label: 'Variables',
        code: `// val → inmutable (como final en Java)
val nombre: String = "Android"
val pi = 3.14            // inferencia de tipo

// var → mutable
var contador: Int = 0
contador = 10`,
      },
      {
        kind: 'code',
        label: 'Tu primer programa',
        code: `fun main() {
    val mensaje = "¡Hola, Android!"
    println(mensaje)

    // String templates
    val version = 14
    println("Android \$version")
}`,
      },
      {
        kind: 'tip',
        text: '💡 Regla de oro: prefiere val sobre var. La inmutabilidad evita bugs difíciles de rastrear.',
      },
      {
        kind: 'table',
        title: 'val vs var',
        headers: ['Keyword', 'Mutable', 'Cuándo usarla', 'Equivalente Java'],
        rows: [
          ['val', '❌ No', 'La mayoría de los casos', 'final'],
          ['var', '✅ Sí', 'Cuando el valor cambia', '(sin modificador)'],
        ],
      },
    ],
  },

  tipos: {
    type: 'lesson',
    session: 'SESIÓN 1',
    title: 'Tipos de Datos',
    intro: 'En Kotlin todos los tipos son objetos. No existen primitivos como en Java.',
    blocks: [
      {
        kind: 'table',
        title: 'Tipos básicos',
        headers: ['Tipo', 'Tamaño', 'Ejemplo', 'Rango'],
        rows: [
          ['Int', '32 bits', '42', '-2³¹ a 2³¹-1'],
          ['Long', '64 bits', '42L', '-2⁶³ a 2⁶³-1'],
          ['Double', '64 bits', '3.14', 'precisión doble'],
          ['Float', '32 bits', '3.14f', 'precisión simple'],
          ['Boolean', '—', 'true / false', 'true o false'],
          ['Char', '16 bits', "'A'", 'Un carácter Unicode'],
          ['String', '—', '"texto"', 'Secuencia de Char'],
        ],
      },
      {
        kind: 'code',
        label: 'Conversión de tipos',
        code: `val entero: Int = 42
val largo: Long = entero.toLong()
val texto: String = entero.toString()
val doble: Double = entero.toDouble()

// ⚠️ En Kotlin NO hay conversión implícita
// val x: Long = entero  // ❌ Error de compilación`,
      },
      {
        kind: 'code',
        label: 'String Templates',
        code: `val nombre = "María"
val edad = 22

// Interpolación simple
println("Hola, \$nombre")

// Expresiones dentro de \${}
println("En 10 años tendrás \${edad + 10} años")

// Multilinea
val bio = """
    Nombre: \$nombre
    Edad:   \$edad
""".trimIndent()`,
      },
    ],
  },

  'null-safety': {
    type: 'lesson',
    session: 'SESIÓN 1',
    title: 'Null Safety',
    intro: 'Kotlin elimina el NullPointerException en tiempo de compilación, uno de los errores más comunes en Java.',
    blocks: [
      {
        kind: 'table',
        title: 'Operadores Null Safety',
        headers: ['Operador', 'Nombre', 'Qué hace'],
        rows: [
          ['?', 'Nullable', 'Permite que la variable sea null'],
          ['?.', 'Safe call', 'Llama al método solo si no es null'],
          ['?:', 'Elvis', 'Valor por defecto si es null'],
          ['!!', 'Not-null assert', 'Fuerza el valor (lanza excepción si null)'],
          ['as?', 'Safe cast', 'Castea o retorna null si falla'],
        ],
      },
      {
        kind: 'code',
        label: 'Null Safety en acción',
        code: `// Tipo nullable con ?
var nombre: String? = null

// ❌ Sin verificar — no compila
// val largo = nombre.length

// ✅ Safe call ?.
val largo = nombre?.length   // null si nombre es null

// ✅ Elvis operator ?:
val largo2 = nombre?.length ?: 0  // 0 si nombre es null

// ✅ Smart cast tras verificación
if (nombre != null) {
    println(nombre.length)  // aquí ya es String, no String?
}

// ⚠️ Evita !! a menos que estés 100% seguro
val largo3 = nombre!!.length  // NullPointerException si null`,
      },
      {
        kind: 'tip',
        text: '💡 Si encuentras !! en tu código, es una señal de alerta. Busca una forma más segura con ?. o ?:',
      },
    ],
  },

  funciones: {
    type: 'lesson',
    session: 'SESIÓN 2',
    title: 'Funciones',
    intro: 'Las funciones en Kotlin son ciudadanos de primera clase: pueden asignarse a variables, pasarse como parámetros y retornarse de otras funciones.',
    blocks: [
      {
        kind: 'code',
        label: 'Declaración de funciones',
        code: `// Función básica
fun saludar(nombre: String): String {
    return "Hola, \$nombre"
}

// Función de una sola expresión
fun sumar(a: Int, b: Int) = a + b

// Parámetros por defecto
fun conectar(host: String = "localhost", puerto: Int = 8080) {
    println("Conectando a \$host:\$puerto")
}

// Llamadas con argumentos nombrados
conectar(puerto = 3000)
conectar(host = "api.ejemplo.com", puerto = 443)`,
      },
      {
        kind: 'code',
        label: 'Funciones de extensión',
        code: `// Extiende String sin heredar
fun String.esPalindromo(): Boolean {
    return this == this.reversed()
}

fun Int.esPar() = this % 2 == 0

// Uso
println("oso".esPalindromo())  // true
println(4.esPar())              // true`,
      },
    ],
  },

  lambdas: {
    type: 'lesson',
    session: 'SESIÓN 2',
    title: 'Lambdas & Funciones de Orden Superior',
    intro: 'Kotlin trata las funciones como datos. Esto permite escribir código más expresivo y reutilizable.',
    blocks: [
      {
        kind: 'code',
        label: 'Lambdas',
        code: `// Sintaxis: { parámetros -> cuerpo }
val cuadrado: (Int) -> Int = { x -> x * x }
val saludo: (String) -> Unit = { nombre -> println("Hola, \$nombre") }

// it: nombre implícito si hay un solo parámetro
val doble: (Int) -> Int = { it * 2 }

println(cuadrado(5))  // 25
saludo("Kotlin")       // Hola, Kotlin`,
      },
      {
        kind: 'code',
        label: 'Funciones de orden superior',
        code: `// Reciben funciones como parámetro
fun operar(a: Int, b: Int, operacion: (Int, Int) -> Int): Int {
    return operacion(a, b)
}

val resultado = operar(10, 3) { x, y -> x + y }
println(resultado)  // 13

// La stdlib de Kotlin las usa mucho:
val numeros = listOf(1, 2, 3, 4, 5)
val pares   = numeros.filter { it % 2 == 0 }   // [2, 4]
val dobles  = numeros.map { it * 2 }            // [2, 4, 6, 8, 10]
val suma    = numeros.reduce { acc, n -> acc + n } // 15`,
      },
    ],
  },

  'control-flow': {
    type: 'lesson',
    session: 'SESIÓN 2',
    title: 'Control Flow',
    intro: 'Kotlin mejora las estructuras de control clásicas haciéndolas expresiones que retornan valores.',
    blocks: [
      {
        kind: 'code',
        label: 'when — el switch mejorado',
        code: `val nota = 85

// when como expresión (retorna valor)
val calificacion = when {
    nota >= 90 -> "A"
    nota >= 80 -> "B"
    nota >= 70 -> "C"
    else       -> "F"
}

// when con argumento
val dia = 3
val nombreDia = when (dia) {
    1 -> "Lunes"
    2 -> "Martes"
    3 -> "Miércoles"
    6, 7 -> "Fin de semana"
    else -> "Otro día"
}`,
      },
      {
        kind: 'code',
        label: 'Loops & Rangos',
        code: `// Rango inclusivo
for (i in 1..5) print("\$i ")   // 1 2 3 4 5

// Rango exclusivo
for (i in 1 until 5) print("\$i ")  // 1 2 3 4

// Step y downTo
for (i in 10 downTo 1 step 2) print("\$i ")  // 10 8 6 4 2

// forEach con índice
val frutas = listOf("🍎", "🍌", "🍊")
frutas.forEachIndexed { idx, fruta ->
    println("\$idx: \$fruta")
}`,
      },
      {
        kind: 'code',
        label: 'if como expresión',
        code: `val x = 10
val y = 20

// if retorna valor
val mayor = if (x > y) x else y
println(mayor)  // 20

// También útil en asignaciones inline
val mensaje = if (mayor > 15) "Grande" else "Pequeño"`,
      },
    ],
  },

  colecciones: {
    type: 'lesson',
    session: 'SESIÓN 3',
    title: 'Colecciones',
    intro: 'Kotlin distingue entre colecciones mutables e inmutables en el sistema de tipos. Prefiere las inmutables por defecto.',
    blocks: [
      {
        kind: 'table',
        title: 'Tipos de colecciones',
        headers: ['Tipo', 'Mutable', 'Cómo crearla', 'Analogía'],
        rows: [
          ['List', '❌ listOf()', 'listOf(1, 2, 3)', 'Arreglo de solo lectura'],
          ['MutableList', '✅ mutableListOf()', 'mutableListOf(1, 2)', 'ArrayList'],
          ['Set', '❌ setOf()', 'setOf("a", "b")', 'Sin duplicados'],
          ['Map', '❌ mapOf()', 'mapOf("k" to "v")', 'Diccionario'],
          ['MutableMap', '✅ mutableMapOf()', 'mutableMapOf()', 'HashMap'],
        ],
      },
      {
        kind: 'code',
        label: 'Operaciones funcionales',
        code: `val estudiantes = listOf("Ana", "Luis", "María", "Carlos", "Ana")

// filter, map, distinct, sorted
val unicos = estudiantes.distinct()              // sin duplicados
val conA   = estudiantes.filter { it.startsWith("A") }
val mayus  = estudiantes.map { it.uppercase() }
val orden  = estudiantes.sorted()

// groupBy
val porLetra = estudiantes.groupBy { it.first() }
// {A=[Ana, Ana], L=[Luis], M=[María], C=[Carlos]}

// Encadenamiento
val resultado = estudiantes
    .distinct()
    .filter { it.length > 3 }
    .sortedBy { it }
    .map { "👤 \$it" }`,
      },
    ],
  },

  'oop-basica': {
    type: 'lesson',
    session: 'SESIÓN 3',
    title: 'OOP Básica en Kotlin',
    intro: 'Kotlin moderniza la OOP eliminando el boilerplate. Un constructor primario, propiedades declaradas en línea, y clases concisas.',
    blocks: [
      {
        kind: 'code',
        label: 'Clases y constructores',
        code: `// Clase con constructor primario
class Persona(val nombre: String, var edad: Int) {

    // Bloque de inicialización
    init {
        require(edad >= 0) { "La edad no puede ser negativa" }
    }

    // Método
    fun saludar() = println("Hola, soy \$nombre y tengo \$edad años")

    // Propiedad computada
    val esMayorDeEdad: Boolean
        get() = edad >= 18
}

val p = Persona("Ana", 22)
p.saludar()
println(p.esMayorDeEdad)  // true`,
      },
      {
        kind: 'code',
        label: 'Companion Object (equivalente a static)',
        code: `class Circulo(val radio: Double) {
    fun area() = PI * radio * radio

    companion object {
        const val PI = 3.14159
        fun desdeArea(area: Double) = Circulo(Math.sqrt(area / PI))
    }
}

// Uso
val c = Circulo(5.0)
println(Circulo.PI)        // acceso como static
val c2 = Circulo.desdeArea(78.5)`,
      },
    ],
  },

  'data-classes': {
    type: 'lesson',
    session: 'SESIÓN 3',
    title: 'Data Classes & Sealed Classes',
    intro: 'Kotlin genera automáticamente equals, hashCode, toString y copy para las data classes, eliminando decenas de líneas de boilerplate.',
    blocks: [
      {
        kind: 'code',
        label: 'Data Classes',
        code: `// Una sola línea reemplaza 50+ líneas de Java
data class Usuario(
    val id: Int,
    val nombre: String,
    val email: String,
    val activo: Boolean = true
)

val u1 = Usuario(1, "Ana", "ana@mail.com")
val u2 = u1.copy(nombre = "Luis", id = 2) // copia con cambios

// Destructuring
val (id, nombre, email) = u1
println("\$id - \$nombre - \$email")

// equals automático
val u3 = Usuario(1, "Ana", "ana@mail.com")
println(u1 == u3)  // true (compara valores, no referencia)`,
      },
      {
        kind: 'code',
        label: 'Sealed Classes — estados finitos',
        code: `// Perfectas para modelar estados en Android (UiState)
sealed class ResultadoLogin {
    data class Exito(val usuario: Usuario) : ResultadoLogin()
    data class Error(val mensaje: String) : ResultadoLogin()
    object Cargando : ResultadoLogin()
}

fun manejarLogin(resultado: ResultadoLogin) {
    when (resultado) {
        is ResultadoLogin.Exito   -> println("Bienvenido, \${resultado.usuario.nombre}")
        is ResultadoLogin.Error   -> println("Error: \${resultado.mensaje}")
        ResultadoLogin.Cargando  -> println("Cargando...")
    }
}`,
      },
    ],
  },

  herencia: {
    type: 'lesson',
    session: 'SESIÓN 3',
    title: 'Herencia & Interfaces',
    intro: 'En Kotlin las clases son cerradas por defecto (final). Debes marcarlas con open para permitir herencia.',
    blocks: [
      {
        kind: 'code',
        label: 'Herencia',
        code: `open class Animal(val nombre: String) {
    open fun sonido(): String = "..."
    fun describir() = "\$nombre hace: \${sonido()}"
}

class Perro(nombre: String) : Animal(nombre) {
    override fun sonido() = "Guau 🐶"
}

class Gato(nombre: String) : Animal(nombre) {
    override fun sonido() = "Miau 🐱"
}

val animales: List<Animal> = listOf(Perro("Rex"), Gato("Mishi"))
animales.forEach { println(it.describir()) }`,
      },
      {
        kind: 'code',
        label: 'Interfaces',
        code: `interface Serializable {
    fun toJson(): String
}

interface Validable {
    fun esValido(): Boolean
}

// Kotlin permite múltiples interfaces
data class Producto(val id: Int, val precio: Double) : Serializable, Validable {
    override fun toJson() = """{"id":\$id,"precio":\$precio}"""
    override fun esValido() = precio > 0
}`,
      },
    ],
  },

  coroutines: {
    type: 'lesson',
    session: 'SESIÓN 4',
    title: 'Coroutines',
    intro: 'Las Coroutines son la solución de Kotlin para código asíncrono. Son más livianas que los threads y mucho más legibles que los callbacks.',
    blocks: [
      {
        kind: 'table',
        title: 'Coroutines vs Threads',
        headers: ['Característica', 'Thread', 'Coroutine'],
        rows: [
          ['Peso', 'Pesado (~1MB stack)', 'Liviano (~1KB)'],
          ['Cantidad', 'Limitado (miles)', 'Millones posibles'],
          ['Bloqueo', 'Bloquea el hilo', 'Suspende, no bloquea'],
          ['Uso en Android', 'runOnUiThread()', 'withContext()'],
        ],
      },
      {
        kind: 'code',
        label: 'Conceptos clave',
        code: `import kotlinx.coroutines.*

// suspend: función que puede pausarse sin bloquear el hilo
suspend fun obtenerDatos(): String {
    delay(1000)  // simula red (no bloquea!)
    return "datos del servidor"
}

// CoroutineScope: contexto donde viven las coroutines
fun main() = runBlocking {
    // launch: fire-and-forget
    launch {
        val datos = obtenerDatos()
        println(datos)
    }

    // async/await: retorna un valor
    val deferred = async { obtenerDatos() }
    val resultado = deferred.await()
}`,
      },
      {
        kind: 'code',
        label: 'Dispatchers — en qué hilo corre',
        code: `// En Android:
viewModelScope.launch {
    // Por defecto corre en Main (UI thread)

    val datos = withContext(Dispatchers.IO) {
        // Aquí hacemos la llamada de red o BD
        api.obtenerUsuario(id)
    }

    // De vuelta en Main, actualizamos la UI
    _uiState.value = datos
}

// Dispatchers disponibles:
// Dispatchers.Main   → UI (Android)
// Dispatchers.IO     → Red, archivos, BD
// Dispatchers.Default → Cómputo intensivo (CPU)`,
      },
      {
        kind: 'tip',
        text: '💡 Regla de oro: usa Dispatchers.IO para red/BD y Dispatchers.Default para operaciones CPU-intensivas. Nunca bloquees el Main thread.',
      },
    ],
  },

  flows: {
    type: 'lesson',
    session: 'SESIÓN 4',
    title: 'Flows',
    intro: 'Flow es el equivalente a un Stream de valores asíncronos. Perfectos para datos que cambian con el tiempo: ubicación GPS, mensajes en tiempo real, etc.',
    blocks: [
      {
        kind: 'table',
        title: 'Future vs Flow',
        headers: ['Característica', 'Coroutine/suspend', 'Flow'],
        rows: [
          ['Valores', 'Un solo valor', 'Múltiples valores'],
          ['Ejemplo', 'Cargar usuario', 'Ubicación GPS en tiempo real'],
          ['Analogía', 'Llamada telefónica', 'Radio encendida'],
          ['Cancelación', 'Job.cancel()', 'collect() cancela automáticamente'],
        ],
      },
      {
        kind: 'code',
        label: 'Crear y consumir Flows',
        code: `import kotlinx.coroutines.flow.*

// Crear un Flow
fun contadorFlow(): Flow<Int> = flow {
    for (i in 1..5) {
        delay(500)
        emit(i)  // emite un valor
    }
}

// Consumir con collect
runBlocking {
    contadorFlow()
        .filter { it % 2 == 0 }  // solo pares
        .map { "Valor: \$it" }
        .collect { println(it) }
}

// StateFlow: Flow con estado (común en ViewModels)
class MiViewModel : ViewModel() {
    private val _contador = MutableStateFlow(0)
    val contador: StateFlow<Int> = _contador.asStateFlow()

    fun incrementar() { _contador.value++ }
}`,
      },
    ],
  },

  'android-basics': {
    type: 'lesson',
    session: 'SESIÓN 4',
    title: 'Android Basics con Kotlin',
    intro: 'Los conceptos fundamentales de Android que necesitas conocer antes de tu primer proyecto.',
    blocks: [
      {
        kind: 'table',
        title: 'Componentes Android',
        headers: ['Componente', 'Qué es', 'Ejemplo de uso'],
        rows: [
          ['Activity', 'Pantalla con UI', 'LoginActivity, HomeActivity'],
          ['Fragment', 'Porción de UI reutilizable', 'ListFragment, DetailFragment'],
          ['ViewModel', 'Lógica de UI + estado', 'Sobrevive rotaciones de pantalla'],
          ['Repository', 'Fuente única de datos', 'Orquesta API + base de datos'],
          ['Service', 'Proceso en background', 'Reproducir música, descargas'],
        ],
      },
      {
        kind: 'code',
        label: 'ViewModel + StateFlow (patrón moderno)',
        code: `class UsuariosViewModel(
    private val repo: UsuariosRepository
) : ViewModel() {

    // Estado de la UI como Flow
    private val _uiState = MutableStateFlow<UiState>(UiState.Loading)
    val uiState: StateFlow<UiState> = _uiState.asStateFlow()

    init { cargarUsuarios() }

    private fun cargarUsuarios() {
        viewModelScope.launch {
            _uiState.value = UiState.Loading
            try {
                val usuarios = repo.obtenerUsuarios()
                _uiState.value = UiState.Success(usuarios)
            } catch (e: Exception) {
                _uiState.value = UiState.Error(e.message ?: "Error")
            }
        }
    }
}

sealed class UiState {
    object Loading : UiState()
    data class Success(val data: List<Usuario>) : UiState()
    data class Error(val msg: String) : UiState()
}`,
      },
    ],
  },

  resumen: {
    type: 'summary',
    session: 'SESIÓN 4',
    title: 'El Chuletario del Desarrollador',
    table: {
      headers: ['¿Qué quiero hacer?', 'Herramienta', '¿Bloquea la UI?', 'Analogía'],
      rows: [
        ['Llamada a una API REST', 'suspend + Retrofit', false, 'Ticket de Pizza'],
        ['Escuchar cambios en BD', 'Flow + Room', false, 'Radio encendida'],
        ['Procesar imagen en background', 'Dispatchers.Default', false, 'Otro cocinero'],
        ['Animación en pantalla', 'Main thread', true, '¡No hagas nada pesado aquí!'],
        ['Compartir estado entre pantallas', 'StateFlow + ViewModel', false, 'Pizarrón compartido'],
      ],
    },
    tip: '💡 Regla de oro: todo lo que tarda más de 16ms saca al usuario del hilo principal. Usa coroutines + IO dispatcher para red y BD.',
  },

  'ejercicios-s1': {
    type: 'exercise',
    session: 'SESIÓN 1',
    title: 'Ejercicios — Sesión 1',
    exercises: [
      {
        id: 'ex1-1',
        title: 'Variables y tipos',
        description: 'Declara las siguientes variables: tu nombre (inmutable), tu edad (mutable), y una variable nullable con valor null. Luego imprime cada una usando string templates.',
        hint: 'Usa val para inmutables, var para mutables, y ? para nullables. Usa ?. para acceder a la nullable.',
        starter: `fun main() {
    // Declara tu nombre como val
    
    // Declara tu edad como var
    
    // Declara una variable nullable (String?)
    
    // Imprime las tres usando string templates
    
}`,
        solution: `fun main() {
    val nombre = "María"
    var edad = 22
    var apodo: String? = null

    println("Hola, soy \$nombre y tengo \$edad años")
    println("Mi apodo es: \${apodo ?: "no tengo"}")

    edad = 23
    println("Ahora tengo \$edad años")
}`,
      },
      {
        id: 'ex1-2',
        title: 'Null Safety',
        description: 'Dada la función que retorna un String nullable, muestra el valor si existe o el texto "Desconocido" si es null. No uses !!',
        hint: 'El operador Elvis ?: es tu amigo aquí.',
        starter: `fun obtenerNombre(): String? {
    return if (Math.random() > 0.5) "Kotlin" else null
}

fun main() {
    val nombre = obtenerNombre()
    // Imprime el nombre o "Desconocido" sin usar !!
    
}`,
        solution: `fun obtenerNombre(): String? {
    return if (Math.random() > 0.5) "Kotlin" else null
}

fun main() {
    val nombre = obtenerNombre()
    println(nombre ?: "Desconocido")
    
    // Alternativa con safe call
    println(nombre?.uppercase() ?: "DESCONOCIDO")
}`,
      },
    ],
  },

  'ejercicios-s2': {
    type: 'exercise',
    session: 'SESIÓN 2',
    title: 'Ejercicios — Sesión 2',
    exercises: [
      {
        id: 'ex2-1',
        title: 'Funciones de extensión',
        description: 'Crea una extensión sobre String llamada palindromo() que retorne true si el texto es un palíndromo. Pruébala con "oso", "kotlin" y "reconocer".',
        hint: 'Puedes invertir un String con .reversed(). Compara ignorando mayúsculas.',
        starter: `// Crea la extensión aquí
fun String.palindromo(): Boolean {
    // tu código
}

fun main() {
    println("oso".palindromo())       // true
    println("kotlin".palindromo())    // false
    println("reconocer".palindromo()) // true
}`,
        solution: `fun String.palindromo(): Boolean {
    val limpio = this.lowercase().filter { it.isLetter() }
    return limpio == limpio.reversed()
}

fun main() {
    println("oso".palindromo())       // true
    println("kotlin".palindromo())    // false
    println("reconocer".palindromo()) // true
    println("Anita lava la tina".palindromo()) // true!
}`,
      },
      {
        id: 'ex2-2',
        title: 'when expression',
        description: 'Escribe una función que reciba una nota del 0 al 100 y retorne la calificación en letra: A (90-100), B (80-89), C (70-79), D (60-69), F (<60).',
        hint: 'Usa when con ranges: when { nota in 90..100 -> "A" ... }',
        starter: `fun calificacion(nota: Int): String {
    // usa when expression
}

fun main() {
    println(calificacion(95))  // A
    println(calificacion(83))  // B
    println(calificacion(55))  // F
}`,
        solution: `fun calificacion(nota: Int): String = when {
    nota in 90..100 -> "A"
    nota in 80..89  -> "B"
    nota in 70..79  -> "C"
    nota in 60..69  -> "D"
    else            -> "F"
}

fun main() {
    println(calificacion(95))  // A
    println(calificacion(83))  // B
    println(calificacion(55))  // F
    println(calificacion(70))  // C
}`,
      },
    ],
  },

  'ejercicios-s3': {
    type: 'exercise',
    session: 'SESIÓN 3',
    title: 'Ejercicios — Sesión 3',
    exercises: [
      {
        id: 'ex3-1',
        title: 'Data class + colecciones',
        description: 'Crea una data class Producto con nombre, precio y categoría. Crea una lista de 5 productos y filtra solo los de categoría "electrónico" con precio menor a 500.',
        hint: 'Usa filter encadenado o filter con &&. Las data classes tienen equals y toString gratis.',
        starter: `data class Producto(
    // define las propiedades
)

fun main() {
    val productos = listOf(
        // crea 5 productos
    )

    val baratos = productos
        // filtra por categoría y precio
    
    baratos.forEach { println(it) }
}`,
        solution: `data class Producto(
    val nombre: String,
    val precio: Double,
    val categoria: String
)

fun main() {
    val productos = listOf(
        Producto("Laptop", 799.0, "electronico"),
        Producto("Audífonos", 49.0, "electronico"),
        Producto("Camisa", 25.0, "ropa"),
        Producto("Tablet", 299.0, "electronico"),
        Producto("Zapatos", 89.0, "ropa")
    )

    val baratos = productos
        .filter { it.categoria == "electronico" && it.precio < 500 }
    
    baratos.forEach { println(it) }
    // Producto(nombre=Audífonos, precio=49.0, categoria=electronico)
    // Producto(nombre=Tablet, precio=299.0, categoria=electronico)
}`,
      },
    ],
  },

  'ejercicios-s4': {
    type: 'exercise',
    session: 'SESIÓN 4',
    title: 'Ejercicios — Sesión 4',
    exercises: [
      {
        id: 'ex4-1',
        title: 'Sealed class + when',
        description: 'Modela el estado de una pantalla de carga con una sealed class. Debe tener estados: Loading, Success con una lista de strings, y Error con un mensaje. Escribe una función que imprima algo diferente para cada estado.',
        hint: 'Recuerda que when con sealed classes es exhaustivo: el compilador avisa si te falta un caso.',
        starter: `sealed class EstadoPantalla {
    // define los estados
}

fun mostrar(estado: EstadoPantalla) {
    when (estado) {
        // maneja cada caso
    }
}

fun main() {
    mostrar(EstadoPantalla.Loading)
    mostrar(EstadoPantalla.Success(listOf("Item 1", "Item 2")))
    mostrar(EstadoPantalla.Error("Sin conexión"))
}`,
        solution: `sealed class EstadoPantalla {
    object Loading : EstadoPantalla()
    data class Success(val items: List<String>) : EstadoPantalla()
    data class Error(val mensaje: String) : EstadoPantalla()
}

fun mostrar(estado: EstadoPantalla) {
    when (estado) {
        EstadoPantalla.Loading          -> println("⏳ Cargando...")
        is EstadoPantalla.Success       -> {
            println("✅ \${estado.items.size} items encontrados:")
            estado.items.forEach { println("  · \$it") }
        }
        is EstadoPantalla.Error         -> println("❌ Error: \${estado.mensaje}")
    }
}

fun main() {
    mostrar(EstadoPantalla.Loading)
    mostrar(EstadoPantalla.Success(listOf("Item 1", "Item 2")))
    mostrar(EstadoPantalla.Error("Sin conexión"))
}`,
      },
    ],
  },

  'entrada-operadores': {
    type: 'lesson',
    session: 'SESIÓN 5',
    title: 'Entrada de Datos y Operadores',
    intro: 'Aprende a recibir información del usuario y a combinar operadores para resolver problemas sencillos desde la consola.',
    blocks: [
      {
        kind: 'code',
        label: 'Leer datos de forma segura',
        code: `fun main() {
    print("¿Cómo te llamas? ")
    val nombre = readln()

    print("¿Cuántos años tienes? ")
    val edad = readln().toIntOrNull()

    val mensaje = if (edad != null) {
        "Hola, $nombre. El próximo año tendrás \${edad + 1}."
    } else {
        "Hola, $nombre. La edad ingresada no es válida."
    }

    println(mensaje)
}`,
      },
      {
        kind: 'table',
        title: 'Operadores frecuentes',
        headers: ['Grupo', 'Operadores', 'Ejemplo'],
        rows: [
          ['Aritméticos', '+  -  *  /  %', '7 % 2 == 1'],
          ['Comparación', '==  !=  <  >  <=  >=', 'edad >= 18'],
          ['Lógicos', '&&  ||  !', 'activo && !bloqueado'],
          ['Asignación', '=  +=  -=  *=  /=', 'puntos += 10'],
          ['Rango y pertenencia', '..  in  !in', 'edad in 18..65'],
        ],
      },
      {
        kind: 'tip',
        text: '💡 Prefiere toIntOrNull() sobre toInt() cuando el dato viene del usuario: una entrada inválida produce null en lugar de cerrar el programa.',
      },
    ],
  },

  'arrays-rangos': {
    type: 'lesson',
    session: 'SESIÓN 5',
    title: 'Arrays y Rangos',
    intro: 'Los arrays almacenan una cantidad fija de elementos. Los rangos representan secuencias y simplifican recorridos y validaciones.',
    blocks: [
      {
        kind: 'code',
        label: 'Arrays',
        code: `val notas = arrayOf(90, 78, 85)

println(notas[0])       // 90
notas[1] = 80           // sus elementos pueden cambiar
println(notas.size)     // 3

for ((indice, nota) in notas.withIndex()) {
    println("$indice: $nota")
}

// Arrays especializados para números
val edades: IntArray = intArrayOf(18, 21, 30)`,
      },
      {
        kind: 'code',
        label: 'Rangos y progresiones',
        code: `val unoACinco = 1..5
val letras = 'a'..'f'

println(3 in unoACinco)       // true
println('z' !in letras)       // true

for (numero in 0 until 10 step 2) {
    print("$numero ")       // 0 2 4 6 8
}

for (cuenta in 3 downTo 1) {
    println(cuenta)
}`,
      },
      {
        kind: 'tip',
        text: '💡 Usa List cuando el tamaño pueda variar o necesites operaciones como filter y map. Usa Array cuando el tamaño sea fijo o una API lo requiera.',
      },
    ],
  },

  excepciones: {
    type: 'lesson',
    session: 'SESIÓN 5',
    title: 'Manejo de Errores',
    intro: 'Las excepciones representan fallos durante la ejecución. En Kotlin puedes capturarlas, producirlas y recuperar un valor alternativo.',
    blocks: [
      {
        kind: 'code',
        label: 'try como expresión',
        code: `fun dividir(a: Int, b: Int): Int? {
    return try {
        a / b
    } catch (e: ArithmeticException) {
        println("No se puede dividir entre cero")
        null
    } finally {
        println("Operación finalizada")
    }
}

val resultado = dividir(10, 0) ?: 0`,
      },
      {
        kind: 'code',
        label: 'Validar y comunicar errores',
        code: `fun aplicarDescuento(precio: Double, porcentaje: Int): Double {
    require(precio >= 0) { "El precio no puede ser negativo" }
    require(porcentaje in 0..100) { "Descuento fuera de rango" }

    return precio * (1 - porcentaje / 100.0)
}

val resultado = runCatching { aplicarDescuento(500.0, 20) }
    .onFailure { println("Error: \${it.message}") }
    .getOrDefault(500.0)

println(resultado) // 400.0`,
      },
      {
        kind: 'tip',
        text: '💡 Captura excepciones específicas y solo cuando puedas recuperarte. No uses try/catch para ocultar errores de programación.',
      },
    ],
  },

  'ejercicios-s5': {
    type: 'exercise',
    session: 'SESIÓN 5',
    title: 'Ejercicios — Sesión 5',
    exercises: [
      {
        id: 'ex5-1',
        title: 'Promedio seguro',
        description: 'Completa una función que reciba varias entradas de texto, ignore los valores no numéricos y devuelva el promedio. Si no hay números válidos, debe devolver 0.0.',
        hint: 'Convierte cada texto con toDoubleOrNull(), elimina los null con mapNotNull() y verifica si la lista quedó vacía.',
        starter: `fun promedioSeguro(entradas: List<String>): Double {
    // Convierte, filtra y calcula el promedio
    TODO()
}

fun main() {
    val datos = listOf("10", "8.5", "error", "9")
    println(promedioSeguro(datos))
}`,
        solution: `fun promedioSeguro(entradas: List<String>): Double {
    val numeros = entradas.mapNotNull { it.toDoubleOrNull() }
    return if (numeros.isEmpty()) 0.0 else numeros.average()
}

fun main() {
    val datos = listOf("10", "8.5", "error", "9")
    println(promedioSeguro(datos)) // 9.166666666666666
}`,
      },
    ],
  },

  'scope-functions': {
    type: 'lesson',
    session: 'SESIÓN 6',
    title: 'Scope Functions',
    intro: 'let, run, with, apply y also ejecutan un bloque sobre un objeto. La diferencia está en cómo se nombra el objeto y qué valor retorna cada función.',
    blocks: [
      {
        kind: 'table',
        title: 'Cómo elegir una Scope Function',
        headers: ['Función', 'Objeto dentro', 'Retorna', 'Uso común'],
        rows: [
          ['let', 'it', 'Resultado del bloque', 'Transformar o trabajar con nullable'],
          ['run', 'this', 'Resultado del bloque', 'Configurar y calcular'],
          ['with', 'this', 'Resultado del bloque', 'Agrupar llamadas sobre un objeto'],
          ['apply', 'this', 'El mismo objeto', 'Configurar un objeto'],
          ['also', 'it', 'El mismo objeto', 'Efecto adicional, como registrar'],
        ],
      },
      {
        kind: 'code',
        label: 'Ejemplos prácticos',
        code: `data class Perfil(var nombre: String = "", var ciudad: String = "")

val perfil = Perfil().apply {
    nombre = "Ana"
    ciudad = "Puebla"
}.also {
    println("Perfil creado: $it")
}

val longitud = perfil.nombre.let { nombre ->
    println(nombre.uppercase())
    nombre.length
}

val ciudad: String? = "Mérida"
ciudad?.let { println("Ciudad seleccionada: $it") }`,
      },
      {
        kind: 'tip',
        text: '💡 Las Scope Functions son útiles en bloques cortos. Si anidas varias, el código pierde claridad; en ese caso usa variables y funciones con nombres.',
      },
    ],
  },

  'enums-objects': {
    type: 'lesson',
    session: 'SESIÓN 6',
    title: 'Enums y Objects',
    intro: 'Los enum representan un conjunto fijo de opciones. object crea una única instancia, útil para configuraciones o servicios sin estado.',
    blocks: [
      {
        kind: 'code',
        label: 'Enum con propiedades',
        code: `enum class Prioridad(val puntos: Int) {
    BAJA(1),
    MEDIA(2),
    ALTA(3)
}

fun etiqueta(prioridad: Prioridad) = when (prioridad) {
    Prioridad.BAJA -> "Puede esperar"
    Prioridad.MEDIA -> "Importante"
    Prioridad.ALTA -> "Urgente"
}

println(Prioridad.ALTA.puntos) // 3`,
      },
      {
        kind: 'code',
        label: 'Object declaration',
        code: `object Configuracion {
    const val NOMBRE_APP = "Mis Tareas"
    var modoOscuro = true

    fun descripcion() = "$NOMBRE_APP · oscuro: $modoOscuro"
}

println(Configuracion.descripcion())

// Object anónimo para implementar una interfaz
val accion = object : Runnable {
    override fun run() = println("Ejecutando")
}`,
      },
    ],
  },

  genericos: {
    type: 'lesson',
    session: 'SESIÓN 6',
    title: 'Genéricos',
    intro: 'Los genéricos permiten reutilizar clases y funciones con distintos tipos sin perder la seguridad que ofrece el compilador.',
    blocks: [
      {
        kind: 'code',
        label: 'Clases y funciones genéricas',
        code: `data class Caja<T>(val valor: T)

val cajaTexto = Caja("Kotlin")       // Caja<String>
val cajaNumero = Caja(42)             // Caja<Int>

fun <T> primeroOAlternativa(lista: List<T>, alternativa: T): T {
    return lista.firstOrNull() ?: alternativa
}

println(primeroOAlternativa(listOf(7, 8), 0))
println(primeroOAlternativa(emptyList<String>(), "Sin datos"))`,
      },
      {
        kind: 'code',
        label: 'Restricciones de tipo',
        code: `fun <T : Comparable<T>> mayor(a: T, b: T): T {
    return if (a >= b) a else b
}

println(mayor(10, 7))
println(mayor("Kotlin", "Java"))`,
      },
      {
        kind: 'tip',
        text: '💡 List<String> y List<Int> usan la misma estructura genérica. T es un marcador que el compilador sustituye por el tipo concreto.',
      },
    ],
  },

  'paquetes-visibilidad': {
    type: 'lesson',
    session: 'SESIÓN 6',
    title: 'Paquetes y Visibilidad',
    intro: 'Los paquetes organizan el código. Los modificadores de visibilidad controlan qué partes pueden utilizarse desde otros archivos, clases o módulos.',
    blocks: [
      {
        kind: 'table',
        title: 'Modificadores de visibilidad',
        headers: ['Modificador', 'Visible desde'],
        rows: [
          ['public', 'Cualquier lugar; es el valor por defecto'],
          ['internal', 'El mismo módulo'],
          ['protected', 'La clase y sus subclases'],
          ['private', 'La clase o el archivo donde se declara'],
        ],
      },
      {
        kind: 'code',
        label: 'Organizar archivos',
        code: `// archivo: modelo/Usuario.kt
package com.ejemplo.modelo

data class Usuario(val nombre: String)

internal fun validar(usuario: Usuario) = usuario.nombre.isNotBlank()

// archivo: app/Main.kt
package com.ejemplo.app

import com.ejemplo.modelo.Usuario

fun main() {
    val usuario = Usuario("Ana")
    println(usuario)
}`,
      },
      {
        kind: 'tip',
        text: '💡 Evita hacer todo public por costumbre. Ocultar detalles internos reduce dependencias y facilita cambiar el código después.',
      },
    ],
  },

  'pruebas-basicas': {
    type: 'lesson',
    session: 'SESIÓN 6',
    title: 'Pruebas Básicas',
    intro: 'Una prueba automática ejecuta una pequeña parte del programa y comprueba que el resultado sea el esperado. Ayuda a detectar errores al hacer cambios.',
    blocks: [
      {
        kind: 'code',
        label: 'Primera prueba con kotlin.test',
        code: `import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

fun sumar(a: Int, b: Int) = a + b

class CalculadoraTest {
    @Test
    fun sumaDosNumeros() {
        assertEquals(5, sumar(2, 3))
    }

    @Test
    fun validaUnaPrecondicion() {
        assertFailsWith<IllegalArgumentException> {
            require(false) { "Dato inválido" }
        }
    }
}`,
      },
      {
        kind: 'table',
        title: 'Patrón Arrange · Act · Assert',
        headers: ['Paso', 'Qué haces'],
        rows: [
          ['Arrange', 'Preparas los datos y dependencias'],
          ['Act', 'Ejecutas la función que quieres probar'],
          ['Assert', 'Compruebas el resultado esperado'],
        ],
      },
      {
        kind: 'tip',
        text: '💡 Empieza probando funciones pequeñas y puras: reciben datos, retornan un resultado y no dependen de la interfaz ni de la red.',
      },
    ],
  },

  'ejercicios-s6': {
    type: 'exercise',
    session: 'SESIÓN 6',
    title: 'Ejercicios — Sesión 6',
    exercises: [
      {
        id: 'ex6-1',
        title: 'Respuesta genérica',
        description: 'Crea una clase genérica Respuesta<T> con los estados Exito y Error. Después, escribe una función que muestre el dato cuando sea un éxito o el mensaje cuando sea un error.',
        hint: 'Usa una sealed class genérica y un when exhaustivo. Exito necesita almacenar un valor de tipo T.',
        starter: `sealed class Respuesta<out T> {
    // Define Exito y Error
}

fun <T> mostrar(respuesta: Respuesta<T>) {
    // Maneja ambos estados
}

fun main() {
    mostrar(Respuesta.Exito("Perfil cargado"))
    mostrar(Respuesta.Error("Sin conexión"))
}`,
        solution: `sealed class Respuesta<out T> {
    data class Exito<T>(val dato: T) : Respuesta<T>()
    data class Error(val mensaje: String) : Respuesta<Nothing>()
}

fun <T> mostrar(respuesta: Respuesta<T>) {
    when (respuesta) {
        is Respuesta.Exito -> println("Dato: \${respuesta.dato}")
        is Respuesta.Error -> println("Error: \${respuesta.mensaje}")
    }
}

fun main() {
    mostrar(Respuesta.Exito("Perfil cargado"))
    mostrar(Respuesta.Error("Sin conexión"))
}`,
      },
    ],
  },

  'proyecto-final': {
    type: 'project',
    title: 'Proyecto Final',
    subtitle: 'Mini App de Lista de Tareas con Kotlin',
    description: 'Aplica todo lo aprendido en un proyecto completo que simula una app real de Android.',
    requirements: [
      { icon: '📦', title: 'Data class', desc: 'Modela una Tarea con id, título, descripción, completada, y fecha.' },
      { icon: '🔒', title: 'Null Safety', desc: 'La descripción es opcional (nullable). Maneja correctamente los casos null.' },
      { icon: '📚', title: 'Colecciones', desc: 'Usa una MutableList. Implementa agregar, eliminar y filtrar por estado.' },
      { icon: '🔀', title: 'Sealed Class', desc: 'Modela el estado de la UI: Loading, Success(tareas), Empty y Error.' },
      { icon: '⚡', title: 'Funciones de extensión', desc: 'Agrega al menos una extensión útil sobre tu data class o colección.' },
      { icon: '🔄', title: 'Coroutine (opcional)', desc: 'Simula una carga asíncrona de tareas con delay() y un suspend fun.' },
    ],
    tip: '💡 Comienza con la data class, luego el repositorio con la lista, y finalmente la lógica de filtrado.',
  },
};
