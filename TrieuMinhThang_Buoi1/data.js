const Product = require("./product");

// Câu 2: Khởi tạo mảng products gồm 5 sản phẩm, thuộc 2 danh mục: Electronics và Accessories
const products = [
  new Product(1, "Laptop", 1000, 5, "Electronics", true),
  new Product(2, "Mouse", 20, 0, "Accessories", true),
  new Product(3, "Keyboard", 35, 10, "Accessories", true),
  new Product(4, "Monitor", 200, 3, "Electronics", false),
  new Product(5, "USB Cable", 10, 15, "Accessories", true)
];

module.exports = products;
