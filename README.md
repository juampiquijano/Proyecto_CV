# Proyecto_CV

Este repositorio es una entrega final del curso "Primeros pasos del desarrollo front end" dictado por Ticmas Academy, cuyo propósito es
demostrar los conocimientos adquiridos durante el curso.
La consigna es crear una landing page que sea el Curriculum Vitae del alumno. Sabiendo esto:

El repositorio es una plantilla de Curriculum Vitae (CV) que cuenta con los apartados:

  - Información personal: Nombre, Profesión, Dirección, Email, Linkedin, Celular
  - Foto
  - Experiencia Laboral
  - Historia Académica
  - Idiomas
  - Capacitaciones
  - Capacidades

Y además, permite que los visitantes contacten al usuario a través de un formulario, el cual es recibido en su cuenta de Netlify y puede configurarse
para que también se notifique en su mail.

La información (a excepción de la Foto) se extrae de un archivo de texto (info.txt), donde se encuentra en formato JSON.
Se inlcuye también un arhivo de Excel, pues la idea es:

  1) cargar la información con formato de tablas en el excel,
  2) Usar el script "devolver datos de tabla como JSON" de la pestaña Automatizar
  3) Copiar el resultado y pegarlo en el archivo info.txt

De esta forma se pretende facilitar la carga de información.

Además, el archivo CSS cuenta con un :root donde se definen los colores de la página como variables generales, así si el usuario lo desea 
puede cambiar los colores de la plantilla con gran facilidad.

Estas decisiones se tomaron con el objetivo de lograr que la plantilla sea facilmente adaptable a nuevos usuarios si quieren cargar sus datos y 
darle su formato de colores preferencial.

Quedan cosas por mejorar como:
  - Agregar la opción para cambiar entre tema claro y oscuro.
  - Mejorar la distribucción de las cards.
  - Agregar algunas animaciones
  

