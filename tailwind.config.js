export default {
  content: [
    // You will probably also need those lines
    "./resources/**/**/*.{js,blade.php}",
    "./app/View/Components/**/**/*.php",
    "./app/Livewire/**/**/*.php",

    // Add mary
    "./vendor/robsontenorio/mary/src/View/Components/**/*.php",
  ],

  // Add daisyUI
  plugins: [require("daisyui")],
}