# 🚀 GUÍA RÁPIDA DE USO

## Para Sergio y Karen 💕

---

## 📱 CÓMO USAR LAS NUEVAS CARACTERÍSTICAS

### 1. 💌 MENSAJES SECRETOS

**¿Qué verás?**
- Tarjetas con mensajes bloqueados 🔒
- Tarjetas con mensajes desbloqueados 🔓
- Cuenta regresiva para el próximo mensaje

**¿Qué hacer?**
- Click en mensajes desbloqueados para leer completo
- Espera las fechas especiales para nuevos mensajes
- ¡Cada fecha importante tiene una sorpresa!

**Fechas importantes:**
- 22 dic 2025: ¡3er Aniversario! 🎂
- 1 ene 2026: Año Nuevo ✨
- 14 feb 2026: San Valentín 💝
- Y más...

---

### 2. 📖 DIARIO DE MOMENTOS

**¿Qué hacer?**

#### Agregar un recuerdo:
1. Click en **"Agregar Nuevo Recuerdo"**
2. Elige un emoji que represente el momento
3. Escribe el título (ej: "Nuestra primera cita")
4. Selecciona la fecha
5. Escribe la descripción (opcional)
6. Click en **"Guardar Recuerdo"**

#### Ver recuerdos:
- Todos los recuerdos aparecen en orden
- Cada uno muestra: emoji, título, fecha y descripción

#### Eliminar un recuerdo:
- Click en el ícono de basura 🗑️
- Confirma que quieres eliminarlo

**Ideas de recuerdos para agregar:**
- Primera cita
- Primer beso
- Viajes juntos
- Momentos especiales
- Aniversarios mensuales
- Logros compartidos

---

### 3. 💌 BUZÓN DE AMOR

**¿Qué hacer?**

#### Enviar un mensaje:
1. Click en **"Escribir Mensaje"**
2. Escribe tu nombre en "De:"
3. Escribe el nombre de tu pareja en "Para:"
4. Elige un color para la carta
5. Escribe tu mensaje de amor
6. Click en **"Enviar Mensaje"**

#### Leer mensajes:
- Click en cualquier carta del buzón
- Se abre el mensaje completo
- Automáticamente se marca como leído

**Ideas de mensajes:**
- "Te amo porque..."
- Agradecimientos
- Promesas
- Recuerdos favoritos
- Planes futuros
- Simplemente "te amo"

---

### 4. 🎉 PRÓXIMOS EVENTOS

**¿Qué verás?**
- Cuenta regresiva en tiempo real
- Días, horas, minutos y segundos
- Solo eventos futuros

**¿Qué hacer?**
- ¡Solo observa! Se actualiza automáticamente
- Comparte la emoción de la cuenta regresiva
- Planea celebraciones para esas fechas

---

## 💾 IMPORTANTE SOBRE LOS DATOS

### ¿Dónde se guardan?
- Los recuerdos y mensajes se guardan en tu navegador
- Usan "localStorage" (almacenamiento local)
- **NO se sincronizan entre dispositivos**

### ¿Qué significa esto?
- Si agregas un recuerdo en tu celular, solo lo verás en ese celular
- Si Karen agrega un mensaje en su computadora, solo lo verá ahí
- Los datos persisten aunque cierres el navegador

### ¿Cómo compartir?
**Opción 1:** Usen el mismo dispositivo
**Opción 2:** Cada uno agrega contenido en su dispositivo
**Opción 3:** Tomen screenshots y compártanlos

### ⚠️ Cuidado:
- Si borras el caché del navegador, pierdes los datos
- Si usas modo incógnito, los datos no se guardan
- Haz backup tomando screenshots de vez en cuando

---

## 🎨 PERSONALIZACIÓN

### Cambiar Mensajes Secretos:
Archivo: `src/components/SecretMessages.jsx`

Busca el array `secretMessages` y edita:
```javascript
{
    id: 1,
    unlockDate: '2025-12-22',
    title: 'Tu título aquí',
    message: 'Tu mensaje aquí',
    icon: '🎂'
}
```

### Agregar Más Eventos:
Archivo: `src/components/UpcomingEvents.jsx`

Busca el array `events` y agrega:
```javascript
{
    id: 5,
    name: 'Cumpleaños de Karen',
    date: '2026-05-15',
    icon: Cake,
    color: 'pink',
    description: '¡Feliz cumpleaños amor!'
}
```

---

## 🔧 COMANDOS ÚTILES

### Ver la página localmente:
```bash
npm run dev
```
Abre: http://localhost:5173

### Desplegar a GitHub Pages:
```bash
git add .
git commit -m "Actualización de contenido"
git push origin master
npm run deploy
```

Espera 2-3 minutos y visita:
https://ezze191.github.io/recuerdos/

---

## 📋 CHECKLIST ANTES DE MOSTRAR LA PÁGINA

- [ ] Personalizar mensajes secretos con sus propias fechas
- [ ] Agregar eventos importantes (cumpleaños, etc.)
- [ ] Verificar que todas las 30 fotos estén correctas
- [ ] Revisar que las 8 canciones funcionen
- [ ] Leer todos los textos y corregir si hay errores
- [ ] Probar en celular y computadora
- [ ] Desplegar a GitHub Pages
- [ ] Probar la URL final

---

## 💡 CONSEJOS DE USO

### Para mantener la página activa:

**Semanalmente:**
- Agrega al menos 1 recuerdo nuevo
- Envíense un mensaje de amor

**Mensualmente:**
- Revisa si hay mensajes secretos desbloqueados
- Actualiza la lista de deseos (BucketList)

**En fechas especiales:**
- Revisa el mensaje secreto del día
- Agrega fotos nuevas a la galería (reemplazando las antiguas)
- Envía un mensaje especial en el buzón

### Ideas de contenido:

**Recuerdos para agregar:**
- Cada cita especial
- Logros personales o compartidos
- Momentos graciosos
- Viajes y aventuras
- Aniversarios mensuales

**Mensajes para enviar:**
- Buenos días/buenas noches
- Agradecimientos
- Declaraciones de amor
- Promesas
- Planes futuros

---

## 🎯 OBJETIVOS DE LA PÁGINA

### Corto plazo (Primera semana):
- Explorar todas las secciones
- Agregar primeros recuerdos
- Enviar primeros mensajes

### Mediano plazo (Primer mes):
- Crear el hábito de agregar contenido
- Revisar mensajes secretos desbloqueados
- Compartir la página con amigos/familia (opcional)

### Largo plazo (Todo el año):
- Documentar su relación
- Crear un archivo de momentos especiales
- Tener una línea de tiempo visual de su amor

---

## ❤️ MENSAJE FINAL

Esta página es **suya**.

Es un espacio para:
- 💕 Expresar su amor
- 📝 Documentar su historia
- 🎉 Celebrar momentos especiales
- 💌 Comunicarse de forma romántica
- ⏰ Anticipar el futuro juntos

**No la dejen morir después del primer día.**

Hagan que crezca con ustedes.
Cada recuerdo agregado, cada mensaje enviado, cada fecha celebrada...
Todo suma a su historia de amor.

---

## 🆘 ¿NECESITAS AYUDA?

### Problemas comunes:

**"No se guardan mis recuerdos"**
- Verifica que no estés en modo incógnito
- Asegúrate de dar permisos al navegador

**"No veo las fotos"**
- Verifica que estén en `public/recuerdos`
- Revisa que los nombres coincidan

**"No suenan las canciones"**
- Verifica que estén en `public/music y poster`
- Revisa el formato (debe ser .mp3)

**"Quiero cambiar algo"**
- Todos los archivos están en `src/components/`
- Cada componente tiene comentarios explicativos

---

## 🎊 ¡DISFRUTEN SU PÁGINA!

Hecha con 💕 para Sergio y Karen

**URL:** https://ezze191.github.io/recuerdos/

---

**Última actualización:** Diciembre 2025
**Versión:** 2.0 - Edición Interactiva
