import Blogs from './components/Blogs';
import Layout from './components/Layout';
import CreateEditBlog from './components/CreateEditBlog';

function App() {
  return (
    <Layout>
      <div class="m-12 grid grid-cols-3 gap-6">
        <div class="lg:col-span-2 sm:col-span-3">
          <Blogs />
        </div>
        <div class="lg:col-span-1 sm:col-span-3">
          <CreateEditBlog />
        </div>
      </div>
    </Layout>
  );
}

export default App;
