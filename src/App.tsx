//кореневий компонент, що відображає MainLayout, а MainLayout відображає сторінки додатка
import { MainLayout } from "./Layouts/MainLayout";
function App() {
  return <MainLayout />;
}

export default App;

//MainLayout містить основні сторінки додатка MoviesPage, HomePage
