# Playground de React Hooks

# Integrantes del grupo

* Juan Diego Moreno
* Andrés Felipe Rojas
* Ángel Urrego

---

# Hooks asignados por integrante

## Andrés Felipe Rojas

* useState
* useMemo
* useDeferredValue
* useEffect
* useActionState
* useDebugValue

## Juan Diego Moreno

* useReducer
* useRef
* useImperativeHandle
* useCallback
* useLayoutEffect
* useId
* use()

## Ángel Urrego

* useContext
* useSyncExternalStore
* useTransition
* useInsertionEffect
* useOptimistic
* useFormStatus

---

# Explicación de los ejercicios

## Andrés Felipe Rojas

En mi parte del trabajo desarrollé ejemplos relacionados con el manejo de estado, optimización de rendimiento y efectos dentro de React.

El primer hook que utilicé fue **useState**, que permite manejar estados simples dentro de un componente funcional. En el ejemplo se implementó un contador que puede aumentar, disminuir y reiniciarse mediante botones.

También implementé **useMemo**, el cual permite memorizar el resultado de cálculos costosos para evitar que se vuelvan a ejecutar en cada render del componente, mejorando así el rendimiento.

Otro hook utilizado fue **useDeferredValue**, que permite diferir actualizaciones de valores cuando se realizan operaciones que podrían afectar el rendimiento, como búsquedas o filtrados en tiempo real.

Con **useEffect** se demostró cómo ejecutar efectos secundarios dentro de un componente, como realizar acciones cuando el componente se renderiza o cuando cambian ciertas dependencias.

Finalmente, se incluyeron hooks más recientes como **useActionState** y **useDebugValue**, los cuales permiten manejar estados de acciones y facilitar la depuración de hooks personalizados respectivamente.

---

## Juan Diego Moreno

En mi parte del proyecto desarrollé ejemplos relacionados con manejo avanzado de estado, referencias, optimización de funciones y nuevos hooks de React.

El primer hook implementado fue **useReducer**, el cual permite manejar estados complejos mediante una función reducer que recibe acciones y determina cómo debe actualizarse el estado.

También trabajé con **useRef**, que permite crear referencias a elementos del DOM sin provocar nuevos renderizados. En el ejemplo se utilizó para enfocar automáticamente un input mediante un botón.

Otro hook utilizado fue **useImperativeHandle**, el cual permite que un componente hijo exponga ciertas funciones al componente padre mediante el uso de referencias.

Para optimización de rendimiento implementé **useCallback**, que memoriza funciones para evitar que se vuelvan a crear en cada render del componente.

En el caso de los efectos se utilizó **useLayoutEffect**, que funciona de forma similar a useEffect pero se ejecuta antes de que el navegador pinte la pantalla, permitiendo medir o modificar el DOM antes de que el usuario vea los cambios.

También utilicé **useId**, que genera identificadores únicos útiles para conectar correctamente etiquetas label con inputs dentro de la aplicación.

Por último, se implementó el hook **use()**, el cual es parte de las nuevas funcionalidades de React y permite consumir promesas o contextos directamente dentro de un componente.

---

## Ángel Urrego

En mi parte del trabajo desarrollé ejemplos enfocados en el manejo de contexto, sincronización de estados externos y optimización del rendimiento en interfaces de usuario.

El hook **useContext** permite acceder a valores globales dentro de la aplicación sin necesidad de pasar props manualmente entre múltiples componentes.

También se implementó **useSyncExternalStore**, que permite suscribirse a fuentes externas de datos y mantener el estado sincronizado con ellas.

Para mejorar la experiencia del usuario se utilizó **useTransition**, el cual permite marcar ciertas actualizaciones de estado como transiciones, evitando que la interfaz se bloquee durante operaciones pesadas.

Además se trabajó con **useInsertionEffect**, que se utiliza principalmente para insertar estilos en el DOM antes de que se ejecuten los efectos de layout.

Finalmente, se implementaron los nuevos hooks de React como **useOptimistic** y **useFormStatus**, los cuales ayudan a manejar estados optimistas en interfaces y a controlar el estado de formularios en aplicaciones modernas.

---

# Tabla general de Hooks

| Hook                 | Categoría       | Descripción                                                          |
| -------------------- | --------------- | -------------------------------------------------------------------- |
| useState             | Estado          | Permite manejar estados simples dentro de un componente              |
| useReducer           | Estado          | Maneja estados complejos utilizando acciones y reducers              |
| useRef               | Referencias     | Permite acceder a elementos del DOM o almacenar valores persistentes |
| useImperativeHandle  | Referencias     | Permite que un componente hijo exponga funciones al padre            |
| useMemo              | Performance     | Memoriza cálculos para evitar ejecuciones innecesarias               |
| useCallback          | Performance     | Memoriza funciones para mejorar el rendimiento                       |
| useDeferredValue     | Performance     | Permite diferir actualizaciones de valores pesados                   |
| useTransition        | Performance     | Permite manejar actualizaciones como transiciones                    |
| useEffect            | Efectos         | Ejecuta efectos secundarios después del render                       |
| useLayoutEffect      | Efectos         | Ejecuta efectos antes de que el navegador pinte la pantalla          |
| useInsertionEffect   | Efectos         | Permite insertar estilos antes de efectos de layout                  |
| useContext           | Contexto        | Permite acceder a datos globales dentro de la aplicación             |
| useSyncExternalStore | Contexto        | Permite sincronizar datos desde fuentes externas                     |
| useId                | Contexto        | Genera identificadores únicos para elementos                         |
| use()                | Nuevos React 19 | Permite consumir promesas o contextos directamente                   |
| useActionState       | Nuevos React 19 | Maneja estados asociados a acciones                                  |
| useOptimistic        | Nuevos React 19 | Permite actualizaciones optimistas en la interfaz                    |
| useFormStatus        | Nuevos React 19 | Permite controlar el estado de formularios                           |
| useDebugValue        | Debug           | Permite mostrar información de depuración en DevTools                |
