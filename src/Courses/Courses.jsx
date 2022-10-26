import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    return (
        <div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    {/* <!-- Page content here --> */}
    <label for="my-drawer" class="btn btn-primary drawer-button w-full h-40 bg-[url('https://i.ibb.co/St9FfGc/pexels-katerina-holmes-5905479.jpg')] bg-cover">Open drawer</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link>Sidebar Item 1</Link></li>
      <li><Link>Sidebar Item 2</Link></li>
      
    </ul>
  </div>
</div>
    );
};

export default Courses;