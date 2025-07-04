const FoodData = [
  {
    id: 1,
    img: "https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868964.jpg?uid=R90236058&ga=GA1.1.1682989771.1748700335&semt=ais_hybrid&w=740",
    name: "Onion Pizza",
    price: 150,
    desc: "A delicious pizza topped with fresh onions for a delightful flavor combination. This pizza is perfect for onion lovers and offers a unique twist on the classic pizza experience. Enjoy the perfect blend of cheesy goodness and the sharp taste of onions in every bite. Whether you're sharing with friends or enjoying it all to yourself, this Onion Pizza is sure to satisfy your pizza cravings.",
    category: "Lunch",
    rating: 4.5,
  },
  {
    id: 2,
    img: "https://img.freepik.com/premium-photo/delicious-classic-italian-pizza-with-tomatoes_79762-2654.jpg?uid=R90236058&ga=GA1.1.1682989771.1748700335&semt=ais_hybrid&w=740",
    name: "Margherita Pizza",
    price: 130,
    desc: "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil. Simple yet bursting with flavors, this Margherita Pizza is a timeless favorite that captures the essence of Italian cuisine.",
    category: "Lunch",
    rating: 4.2,
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-photo/pizza-with-cheese-tomato-isolated-white-background-pizza-margarita-top-view-photo-menu_639032-301.jpg?uid=R90236058&ga=GA1.1.1682989771.1748700335&semt=ais_hybrid&w=740",
    name: "Pepperoni Pizza",
    price: 160,
    desc: "Indulge in the savory delight of this Pepperoni Pizza, loaded with slices of spicy pepperoni, melted cheese, and a tangy tomato sauce. A popular choice that's perfect for satisfying your pizza cravings.",
    category: "Lunch",
    rating: 4.6,
  },
  {
    id: 4,
    img: "https://img.freepik.com/premium-photo/veggie-pizza-white-isolated-background_381014-111.jpg?uid=R90236058&ga=GA1.1.1682989771.1748700335&semt=ais_hybrid&w=740",
    name: "Mushroom and Spinach Pizza",
    price: 140,
    desc: "Experience the earthy flavors of mushrooms combined with the freshness of spinach on this delightful pizza. Topped with a blend of cheeses, this Mushroom and Spinach Pizza offers a balanced and satisfying taste.",
    category: "Lunch",
    rating: 4.2,
  },
  {
    id: 5,
    img: "https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?uid=R90236058&ga=GA1.1.1682989771.1748700335&semt=ais_hybrid&w=740",
    name: "BBQ Chicken Pizza",
    price: 170,
    desc: "Savor the smoky goodness of this BBQ Chicken Pizza, featuring tender pieces of chicken marinated in barbecue sauce, red onions, and a medley of cheeses. A fusion of flavors that's sure to delight your taste buds.",
    category: "Lunch",
    rating: 4.8,
  },
  {
    id: 6,
    img: "https://img.freepik.com/free-photo/delicious-pancakes-with-strawberry-jam_2829-15767.jpg?uid=R90236058&ga=GA1.1.1682989771.1748700335&semt=ais_hybrid&w=740",
    name: "Classic Pancakes",
    price: 80,
    desc: "Start your day with a stack of fluffy pancakes served with maple syrup and a dollop of butter. A timeless breakfast favorite that's sure to satisfy your morning cravings.",
    category: "Breakfast",
    rating: 4.5,
  },
  {
    id: 7,
    img: "https://img.freepik.com/free-photo/pork-steak_1339-350.jpg?uid=R90236058&ga=GA1.1.1682989771.1748700335&semt=ais_hybrid&w=740",
    name: "Egg and Bacon Croissant",
    price: 110,
    desc: "Indulge in a buttery croissant filled with scrambled eggs, crispy bacon, and melted cheese. A savory and satisfying breakfast option that's perfect for on-the-go mornings.",
    category: "Breakfast",
    rating: 4.2,
  },
  {
    id: 8,
    img: "https://img.freepik.com/free-photo/flat-lay-fruit-yoghurt-with-rose_23-2148381250.jpg?uid=R90236058&ga=GA1.1.1682989771.1748700335&semt=ais_hybrid&w=740",
    name: "Greek Yogurt Parfait",
    price: 95,
    desc: "Enjoy a healthy and refreshing breakfast with layers of creamy Greek yogurt, fresh berries, honey, and granola. A balanced option that provides a burst of flavors and energy.",
    category: "Breakfast",
    rating: 4.1,
  },
  {
    id: 9,
    img: "https://img.freepik.com/free-photo/top-view-pita-with-avocado-fried-egg-plate_23-2148749157.jpg?uid=R90236058&ga=GA1.1.1682989771.1748700335&semt=ais_hybrid&w=740",
    name: "Avocado Toast",
    price: 120,
    desc: "Savor the creaminess of mashed avocado on toasted whole grain bread, topped with a sprinkle of sea salt and red pepper flakes. A trendy and nutritious breakfast choice.",
    category: "Breakfast",
    rating: 4.6,
  },
  {
    id: 10,
    img: "https://img.freepik.com/free-photo/delicious-healthy-oatmeal-with-figs-nuts-kiwi-seeds_2829-18240.jpg?uid=R90236058&ga=GA1.1.1682989771.1748700335&semt=ais_hybrid&w=740",
    name: "Fruit and Nut Oatmeal",
    price: 85,
    desc: "Warm up with a bowl of hearty oatmeal packed with mixed fruits, nuts, and a drizzle of honey. A wholesome breakfast that provides a satisfying start to your day.",
    category: "Breakfast",
    rating: 4.5,
  },
  {
    id: 11,
    img: "https://img.freepik.com/free-photo/grilled-salmon-with-salad_2829-19746.jpg?uid=R90236058&ga=GA1.1.1682989771.1748700335&semt=ais_hybrid&w=740",
    name: "Grilled Salmon",
    price: 190,
    desc: "Delight in a perfectly grilled salmon fillet seasoned with herbs and served with a side of roasted vegetables. A healthy and flavorful dinner option that's rich in omega-3 fatty acids.",
    category: "Dinner",
    rating: 4.5,
  },
  {
    id: 12,
    img: "https://img.freepik.com/free-photo/ai-generated-pasta_23-2150637314.jpg?uid=R90236058&ga=GA1.1.1682989771.1748700335&semt=ais_hybrid&w=740",
    name: "Chicken Alfredo Pasta",
    price: 160,
    desc: "Indulge in creamy fettuccine Alfredo pasta with tender pieces of grilled chicken. This comforting dinner dish is a blend of pasta, rich Alfredo sauce, and savory chicken.",
    category: "Dinner",
    rating: 4.8,
  },
  {
    id: 13,
    img: "https://img.freepik.com/free-photo/white-rice-with-vegetables-black-bowl-isolated-white-background_123827-31335.jpg?uid=R90236058&ga=GA1.1.1682989771.1748700335&semt=ais_hybrid&w=740",
    name: "Vegetable Stir-Fry",
    price: 130,
    desc: "Enjoy a medley of colorful vegetables stir-fried in a flavorful sauce, served over steamed rice. A light and nutritious dinner that's both satisfying and wholesome.",
    category: "Dinner",
    rating: 4.2,
  },
  {
    id: 14,
    img: "https://img.freepik.com/free-photo/tuna-salad_74190-6076.jpg?uid=R90236058&ga=GA1.1.1682989771.1748700335&semt=ais_hybrid&w=740",
    name: "Grilled Chicken Burrito Bowl",
    price: 160,
    desc: "Savor the flavors of a delicious burrito bowl with tender grilled chicken, black beans, rice, sautéed peppers and onions, shredded cheese, and a drizzle of zesty cilantro-lime dressing. A hearty and satisfying chicken dinner option.",
    category: "Dinner",
    rating: 4.6,
  },
  {
    id: 15,
    img: "https://img.freepik.com/free-photo/russian-salad-olivier-salad-marble-table-christmas-dinner_123827-22936.jpg?uid=R90236058&ga=GA1.1.1682989771.1748700335&semt=ais_hybrid&w=740",
    name: "Mushroom Risotto",
    price: 175,
    desc: "Indulge in creamy and flavorful mushroom risotto, made with Arborio rice, sautéed mushrooms, and a touch of Parmesan cheese. A comforting and sophisticated dinner choice.",
    category: "Dinner",
    rating: 4.5,
  },
  {
    id: 16,
    img: "https://img.freepik.com/free-psd/close-up-appetizing-cheese-sandwich_23-2151837119.jpg?uid=R90236058&ga=GA1.1.1682989771.1748700335&semt=ais_hybrid&w=740",
    name: "Cheese and Crackers Platter",
    price: 120,
    desc: "Enjoy a variety of artisan cheeses, paired with an assortment of crispy crackers and complemented by fresh fruits and nuts. A delightful snack option for sharing or indulging in on your own.",
    category: "Snacks",
    rating: 4.3,
  },
  {
    id: 17,
    img: "https://img.freepik.com/free-photo/crispy-kentucky-fried-chicken-isolated-white-background_123827-22316.jpg?uid=R90236058&ga=GA1.1.1682989771.1748700335&semt=ais_hybrid&w=740",
    name: "Crispy Chicken Wings",
    price: 130,
    desc: "Savor the satisfying crunch of crispy chicken wings seasoned to perfection. Choose your favorite sauce, from tangy BBQ to spicy buffalo, for a flavorful snacking experience.",
    category: "Snacks",
    rating: 4.4,
  },
  {
    id: 18,
    img: "https://img.freepik.com/free-photo/fried-tofu-healthy-food_1339-8269.jpg?uid=R90236058&ga=GA1.1.1682989771.1748700335&semt=ais_hybrid&w=740",
    name: "Paneer Tikka Skewers",
    price: 130,
    desc: "Enjoy succulent pieces of marinated paneer (Indian cottage cheese) skewered and grilled to perfection. Served with mint chutney, these paneer tikka skewers offer a flavorful and aromatic Indian snack experience.",
    category: "Snacks",
    rating: 4.9,
  },
  {
    id: 19,
    img: "https://img.freepik.com/free-photo/chickpea-hummus-wooden-bowl-garnished-with-parsley-paprika-olive-oil-isolated-white-background-close-up_123827-23067.jpg?uid=R90236058&ga=GA1.1.1682989771.1748700335&semt=ais_hybrid&w=740",
    name: "Hummus and Veggie Platter",
    price: 90,
    desc: "Relish the smooth and flavorful hummus accompanied by a variety of fresh vegetable sticks and pita bread. A nutritious and satisfying option for a light and refreshing snack.",
    category: "Snacks",
    rating: 4.4,
  },
  {
    id: 20,
    img: "https://img.freepik.com/free-photo/strawberry-lemon-popsicles-isolated-white-background_123827-21288.jpg?uid=R90236058&ga=GA1.1.1682989771.1748700335&semt=ais_hybrid&w=740",
    name: "Fruit Skewers",
    price: 70,
    desc: "Indulge in a colorful assortment of fruit skewers featuring juicy chunks of melon, berries, pineapple, and more. A sweet and refreshing snack that's both delicious and visually appealing.",
    category: "Snacks",
    rating: 4.8,
  },
];
export default FoodData;    