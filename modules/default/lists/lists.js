Module.register("lists", {
    // Default module config.
    defaults: {
      text: "Hello World!",
      list: ["Item 1", "Item 2", "Item 3"]
    },
  
    // Override dom generator.
    getDom: function () {
      var wrapper = document.createElement("div");

      this.config.list.array.forEach(listItem => {
        var itemWrapper = document.createElement("td");
        
        itemWrapper.innerHTML = listItem;
        wrapper.appendChild(itemWrapper)
      });

      return wrapper;
    },
  });