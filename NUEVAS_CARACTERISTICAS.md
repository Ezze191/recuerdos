# 💕 Página de Amor Interactiva - Sergio y Karen

## 🎉 Nuevas Características Interactivas

Esta página ahora incluye múltiples características interactivas diseñadas para que regresen constantemente y sigan creando recuerdos juntos.

---

## 📋 Características Implementadas

### 1. 💌 **Mensajes Secretos Desbloqueables**
**Ubicación:** Después del contador de tiempo

**¿Qué hace?**
- Muestra mensajes especiales que se desbloquean en fechas importantes
- Cuenta regresiva para el próximo mensaje
- Mensajes personalizados para aniversarios, San Valentín, Año Nuevo, etc.

**Mensajes incluidos:**
- 22 de diciembre 2025: 3er Aniversario
- 1 de enero 2026: Año Nuevo
- 14 de febrero 2026: San Valentín
- 22 de marzo 2026: 3 años y 3 meses
- 22 de junio 2026: 3 años y 6 meses
- 22 de diciembre 2026: 4to Aniversario

**Personalización:**
Puedes editar los mensajes en `src/components/SecretMessages.jsx`

---

### 2. 📖 **Diario de Momentos**
**Ubicación:** Después de la galería de fotos

**¿Qué hace?**
- Permite agregar nuevos recuerdos especiales
- Cada recuerdo incluye: emoji, título, fecha y descripción
- Los recuerdos se guardan automáticamente (localStorage)
- Pueden eliminar recuerdos si lo desean

**Cómo usar:**
1. Click en "Agregar Nuevo Recuerdo"
2. Elige un emoji que represente el momento
3. Escribe el título y la fecha
4. Agrega una descripción (opcional)
5. ¡Guarda y el recuerdo aparecerá en la lista!

**Datos guardados:**
- Los recuerdos persisten incluso si cierran la página
- Se guardan en el navegador (localStorage)
- Compatible con GitHub Pages

---

### 3. 💌 **Buzón de Amor**
**Ubicación:** Después de la lista de deseos

**¿Qué hace?**
- Pueden enviarse mensajes de amor el uno al otro
- Cada mensaje tiene un color personalizable
- Muestra mensajes no leídos con un indicador
- Los mensajes se guardan automáticamente

**Cómo usar:**
1. Click en "Escribir Mensaje"
2. Escribe de quién es y para quién
3. Elige un color para la carta
4. Escribe tu mensaje
5. ¡Envía y el mensaje aparecerá en el buzón!

**Características:**
- Contador de mensajes no leídos
- Diferentes colores de cartas (rosa, rojo, morado, etc.)
- Vista completa del mensaje al hacer click

---

### 4. 🎉 **Próximos Eventos Especiales**
**Ubicación:** Después del contador de tiempo

**¿Qué hace?**
- Muestra cuenta regresiva en tiempo real para fechas importantes
- Actualización cada segundo
- Solo muestra eventos futuros

**Eventos incluidos:**
- 3er Aniversario (22 dic 2025)
- Año Nuevo 2026
- San Valentín 2026
- 4to Aniversario (22 dic 2026)

**Personalización:**
Puedes agregar más eventos en `src/components/UpcomingEvents.jsx`

---

## 🎨 Orden de las Secciones

1. **Pantalla de Bienvenida** (animación inicial)
2. **Hero** (título principal)
3. **Contador de Tiempo** (años, meses, días, horas, minutos, segundos)
4. **Próximos Eventos** ⭐ NUEVO
5. **Mensajes Secretos** ⭐ NUEVO
6. **Timeline** (historia de la relación)
7. **Galería de Fotos** (30 imágenes)
8. **Diario de Momentos** ⭐ NUEVO
9. **Frase del Día** (cambia cada 24 horas)
10. **Lista de Deseos** (metas compartidas)
11. **Buzón de Amor** ⭐ NUEVO
12. **Mensajes de Amor** (cartas estáticas)
13. **Dedicatoria** (mensaje especial)
14. **Reproductor de Música** (8 canciones)

---

## 💾 Persistencia de Datos

Todas las características interactivas usan **localStorage** para guardar datos:

- ✅ **Diario de Momentos**: Recuerdos guardados
- ✅ **Buzón de Amor**: Mensajes enviados
- ✅ **Compatible con GitHub Pages**: No requiere backend

**Nota:** Los datos se guardan en el navegador. Si borran el caché o usan otro dispositivo, los datos no estarán sincronizados.

---

## 🚀 Beneficios de las Nuevas Características

### Para Engagement Continuo:
1. **Mensajes Secretos**: Razón para regresar en fechas específicas
2. **Diario de Momentos**: Pueden agregar nuevos recuerdos constantemente
3. **Buzón de Amor**: Comunicación romántica continua
4. **Próximos Eventos**: Anticipación para fechas especiales

### Interactividad:
- Ya no es solo una página estática
- Invita a participar y crear contenido
- Crece con la relación
- Personalizable y único para ustedes

---

## 🎯 Cómo Personalizar

### Agregar más Mensajes Secretos:
Edita `src/components/SecretMessages.jsx`:
```javascript
{
    id: 7,
    unlockDate: '2026-03-15', // Fecha
    title: 'Título del mensaje',
    message: 'Tu mensaje aquí',
    icon: '🎁' // Emoji
}
```

### Agregar más Eventos:
Edita `src/components/UpcomingEvents.jsx`:
```javascript
{
    id: 5,
    name: 'Nombre del evento',
    date: '2026-05-20',
    icon: Star, // Heart, Gift, Cake, Star
    color: 'rose', // rose, pink, purple, red
    description: 'Descripción del evento'
}
```

---

## 📱 Compatibilidad

- ✅ **Responsive**: Funciona en móvil, tablet y desktop
- ✅ **GitHub Pages**: 100% compatible
- ✅ **Sin Backend**: Todo funciona en el frontend
- ✅ **Navegadores Modernos**: Chrome, Firefox, Safari, Edge

---

## 🎨 Paleta de Colores

Las nuevas secciones usan gradientes variados para diferenciarlas:

- **Mensajes Secretos**: Rosa/Púrpura
- **Diario de Momentos**: Púrpura/Rosa
- **Buzón de Amor**: Rosa/Rojo
- **Próximos Eventos**: Azul/Púrpura/Rosa

---

## 💡 Ideas Futuras (Opcional)

Si quieres expandir más la página:

1. **Galería Interactiva**: Poder agregar nuevas fotos
2. **Calendario Compartido**: Marcar fechas importantes
3. **Contador de Besos/Abrazos**: Contador divertido
4. **Playlist Colaborativa**: Agregar canciones juntos
5. **Juego de Trivia**: Preguntas sobre la relación

---

## 🔧 Despliegue en GitHub Pages

Todo está listo para desplegarse. Solo ejecuta:

```bash
npm run deploy
```

La página estará disponible en:
https://ezze191.github.io/recuerdos/

---

## ❤️ Creado con Amor

Esta página ahora es una experiencia viva que crece con su relación.
Cada visita puede traer algo nuevo: un mensaje desbloqueado, un recuerdo agregado, o una carta de amor esperando.

**¡Disfruten su página de amor interactiva!** 💕

---

## 📞 Soporte

Si necesitas ayuda para personalizar algo:
- Todos los componentes están en `src/components/`
- Cada archivo está comentado y es fácil de editar
- Los datos se guardan automáticamente en localStorage
