document.addEventListener("DOMContentLoaded", () => {
  // Plant Gallery
  const plantGallery = document.getElementById("plant-gallery");
  
  const plants = [
    {
      name: "Plumeria Alba",
      image: "images/plumeria.jpg",
      benefit: "Fragrant blooms loved for tropical gardens.",
      tag: "Best Seller"
    },
    {
      name: "Variegated Money Plant",
      image: "images/moneyplant.jpg",
      benefit: "Believed to bring wealth and prosperity.",
      tag: "Best Seller"
    },
    {
      name: "Thunbergia Grandiflora",
      image: "images/thunbergia.jpg",
      benefit: "Vigorous flowering climber with blue blooms.",
      tag: "Best Seller"
    },
    {
      name: "Peace Lily",
      image: "images/peacelily.jpg",
      benefit: "Excellent air-purifier and shade-lover.",
      tag: "Best Seller"
    },
    {
      name: "Pandanus Pygmaeus",
      image: "images/pandanus.jpg",
      benefit: "Compact, spiky ornamental shrub.",
      tag: "Best Seller"
    },
    {
      name: "Curtain Creeper",
      image: "images/curtaincreeper.jpg",
      benefit: "Fast-growing green cover for walls and fences.",
      tag: "Best Seller"
    },
    {
      name: "Monstera Albo Variegata",
      image: "images/monstera-albo.jpg",
      benefit: "Large glossy leaves that purify indoor air.",
      tag: "Rare"
    },
    {
      name: "Philodendron Erubescens 'Pink Princess'",
      image: "images/pink-princess.jpg",
      benefit: "Striking pink foliage for vibrant interiors.",
      tag: "Trending"
    },
    {
      name: "Alocasia Baginda ‘Dragon Scale’",
      image: "images/dragon-scale.jpg",
      benefit: "Textured leaves add tropical elegance.",
      tag: "Rare"
    },
    {
      name: "Bird of Paradise",
      image: "images/bird-of-paradise.jpg",
      benefit: "Tall leaves bring exotic flair to rooms.",
      tag: "New"
    },
    {
      name: "Ficus Lyrata",
      image: "images/fiddle-leaf-fig.jpg",
      benefit: "Iconic large leaves for statement decor.",
      tag: "Trending"
    },
    {
      name: "Orchids",
      image: "images/orchids.jpg",
      benefit: "Elegant flowers brighten any space.",
      tag: "New"
    },
    {
      name: "Zamia Fischeri",
      image: "images/zamia-fischeri.jpg",
      benefit: "Resilient and lush tropical foliage.",
      tag: "Rare"
    },
    {
      name: "Dypsis Lutescens",
      image: "images/dypsis-lutescens.jpg",
      benefit: "Palm-like fronds for airy aesthetics.",
      tag: "Trending"
    },
    {
      name: "Caryota Mitis",
      image: "images/caryota-mitis.jpg",
      benefit: "Feathery fronds with a tropical waterfall vibe.",
      tag: "Rare"
    },
    {
      name: "Alocasia Macrorrhiza",
      image: "images/alocasia-macrorrhiza.jpg",
      benefit: "Giant leaves bring bold, dramatic texture indoors.",
      tag: "Trending"
    },
    {
      name: "Calathea Lutea",
      image: "images/calathea-lutea.jpg",
      benefit: "Upright growth with elegant paddle-like leaves.",
      tag: "New"
    },
    {
      name: "Rhapis Excelsa",
      image: "images/rhapis-excelsa.jpg",
      benefit: "Refined bamboo-like appearance for shaded areas.",
      tag: "Rare"
    }
  ];

  // Loop through and generate cards for plant gallery
  plants.forEach(plant => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="tag ${plant.tag.toLowerCase()}">${plant.tag}</div>
      <img src="${plant.image}" alt="${plant.name}" />
      <div class="card-content">
        <h3>${plant.name}</h3>
        <p>${plant.benefit}</p>
      </div>
    `;

    plantGallery.appendChild(card);
  });

  // Blog section functionality for toggling answers
  const questionBtns = document.querySelectorAll('.question-btn');
  
  // Loop through each question button to add event listener
  questionBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const answer = btn.nextElementSibling;  // This selects the associated answer div

      // Toggle the display of the answer section
      if (answer.style.display === 'block') {
        answer.style.display = 'none';  // Hide the answer
      } else {
        answer.style.display = 'block';  // Show the answer
      }
    });
  });

});
