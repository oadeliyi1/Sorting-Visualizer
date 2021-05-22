function swap(el1,el2)
    {

      const style1 = window.getComputedStyle(el1);
      const style2 = window.getComputedStyle(el2);


      const transform1 = style1.getPropertyValue("height");
      const transform2 = style2.getPropertyValue("height");

      el1.style.height = transform2;
      el2.style.height = transform1;

    }
