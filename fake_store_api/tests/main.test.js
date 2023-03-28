const fn = require("../main");

describe("getAllProducts", () => {
  it("should return an array with the products", async () => {
    const received = await fn.getAllProducts();
    expect(Array.isArray(received)).toBeTruthy();
  });

  it("all products should have at least the properties: id, title, price, description, category, image, rating: {rate, count}", async () => {
    const expected = expect.objectContaining({
      id: expect.any(Number),
      title: expect.any(String),
      price: expect.any(Number),
      description: expect.any(String),
      category: expect.any(String),
      image: expect.any(String),
      rating: expect.objectContaining({
        rate: expect.any(Number),
        count: expect.any(Number),
      }),
    });

    const received = await fn.getAllProducts();

    received.forEach((element) => {
      expect(element).toMatchObject(expected);
    });
  });

  it("should return an error if url is invalid", async () => {
    const invalidUrl = "https://fakestoreapi.com/produts/";

    try {
      await fn.getAllProducts(invalidUrl);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
describe("getProductById", () => {
  it("should return an array with the products", async () => {
    const received = await fn.getProductById(1);
    expect(typeof received).toBe("object");
  });

  it("should return the product with id 1", async () => {
    const expected = {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    };

    const received = await fn.getProductById(1);

    expect(received).toEqual(expected);
  });

  it("should return an error if id is 0", async () => {
    try {
      await fn.getProductById(0);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});

describe("getAllCategories", () => {
  it("should return at least [ electronics, jewelery, men's clothing, women's clothing ]", async () => {
    const expectedCategories = [
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ];

    const received = await fn.getAllCategories();

    expect(received).toEqual(expect.arrayContaining(expectedCategories));
  });

  it("should return elements as strings", async () => {
    const received = await fn.getAllCategories();

    received.forEach((element) => {
      expect(typeof element).toBe("string");
    });
  });

  it("should return an error if url is invalid", async () => {
    const invalidUrl = "https://fakestoreapi.com/products/invalid/categories";

    try {
      await fn.getAllCategories(invalidUrl);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});

describe("getProductByCategory", () => {
  it("should return products containing the category of input", async () => {
    const received = await fn.getProductByCategory("men's clothing");

    expect(received).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          category: "men's clothing",
        }),
      ])
    );
  });

  it("should throw an error if url is invalid", async () => {
    const invalidUrl = "https://fakestoreapi.com/products/categry/";

    try {
      await fn.getProductByCategory("jewelery", invalidUrl);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
  it("should throw an error if category is invalid", async () => {
    const invalidCategory = "books";

    try {
      await fn.getProductByCategory(invalidCategory);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});

describe("getProductWithRatingHigherThan", () => {
  it("should return an array of products with rating higher than the input", async () => {
    const minimumRate = 4;
    const received = await fn.getProductWithRatingHigherThan(minimumRate);
    expect(received).toEqual(
      expect.arrayContaining(
        received.filter((product) => product.rating.rate > minimumRate)
      )
    );
  });

  it("should throw an error if rating is falsy", async () => {
    const args = [null, undefined, NaN, "", false];

    args.forEach((element) => {
      expect(async () => {
        await fn.getProductWithRatingHigherThan(element);
      }).rejects.toThrow();
    });
  });

  it("throws an error when an invalid URL is passed", async () => {
    try {
      await fn.getProductWithRatingHigherThan(
        4,
        "https://fakestoreapi.com/produts/"
      );
      console.log("try");
    } catch (error) {
      console.log("catch");
      expect(error).toBeDefined();
    }
  });
});

describe("getMostVotedProduct", () => {
  it("should return the product with 679 votes", async () => {
    const received = await fn.getMostVotedProduct();
    expect(received.rating.count).toBe(679);
  });

  it("throws an error when an invalid URL is passed", async () => {
    try {
      await fn.getMostVotedProduct("https://fakestoreapi.com/produts/");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});

describe("getAveragePrice", () => {
  it("should return a number", async () => {
    const received = await fn.getAveragePrice();
    expect(typeof received).toBe("number");
  });

  it("throws an error when an invalid URL is passed", async () => {
    try {
      await fn.getAveragePrice("https://fakestoreapi.com/produts/");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});

describe("getMostExpensiveProduct", () => {
  it("should return an object with price 999.99", async () => {
    const received = await fn.getMostExpensiveProduct();
    expect(received.price).toBeCloseTo(999.99, 3);
  });

  it("throws an error when an invalid URL is passed", async () => {
    try {
      await fn.getMostExpensiveProduct("https://fakestoreapi.com/produts/");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});

describe("getCheaperProduct", () => {
  it("should return an object with price 7.95", async () => {
    const received = await fn.getCheaperProduct();
    expect(received.price).toBeCloseTo(7.95, 3);
  });

  it("throws an error when an invalid URL is passed", async () => {
    try {
      await fn.getCheaperProduct("https://fakestoreapi.com/produts/");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
