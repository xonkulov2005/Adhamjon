const arr = [
  { id: 1, name: "Oyoq kiyim", image: "images/shoes.png" },
  { id: 2, name: "Futbolka", image: "images/shirt.png" },
  { id: 3, name: "Qo'l soati", image: "images/watch.png" },
  { id: 4, name: "Shim", image: "images/pants.png" },
];

const btn = document.querySelector(".btn");
const imageContainer = document.querySelector(".image-container");

btn.addEventListener("click", () => {
  const result = arr[Math.floor(Math.random() * arr.length)];

  imageContainer.innerHTML = `
    <div class="item" style="
      width: 300px;
      margin: 0 auto;
      padding: 30px;
      text-align: center;
      border-radius: 20px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      background-color: #fff;
    ">
      <img 
        src="${result.image}" 
        alt="${result.name}" 
        style="
          width: 250px;
          height: 300px;
          border-radius: 20px;
          margin-bottom: 20px;
        "
      />
      <h3 style="font-size: 24px; color: #333;">${result.name}</h3>
    </div>
  `;
});
