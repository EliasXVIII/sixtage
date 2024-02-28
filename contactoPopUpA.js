function toggle() {
    var blur = document.getElementById('blurA'); /* cuando se activa, aplica el filtro de blur de css .mainContactoBA#blurA.active */
    blur.classList.toggle('active');
    var popup = document.getElementById('popupBA');
    popup.classList.toggle('active');
  }

