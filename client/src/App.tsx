import Blogs from './components/Blogs';
import Layout from './components/Layout';
import CreateEditBlog from './components/CreateEditBlog';

function App() {
  return (
    <Layout>
      <div class="m-12 grid grid-cols-3 gap-6">
        <div class="col-span-2">
          <Blogs />
        </div>
        <div class="col-span-1">
          <CreateEditBlog />
        </div>
      </div>
    </Layout>
  );
}

export default App;
