import React from 'react';

const Blogs = () => {
  return (
    <div className='body bg-blue-200'>
      <div className="container w-1/2 mx-auto my-10 p-8">
        <div className='mt-8'>
        <div className="title">
          <h3 className='text-3xl font-semibold italic'>What is cors?</h3>
          <div className="description">
          <p className='font-semibold italic'>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
          </div>
        </div>
        </div>


        <div className='mt-8'>
        <div className="title">
          <h3 className='text-3xl font-semibold italic'>Why are you using firebase? What other options do you have to implement authentication?</h3>
          <div className="description">
          <p className='font-semibold italic'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Some Alternative:MongoDB Oracle Database Amazon Redshift DataStax Enterprise Redis Enterprise Cloud. Cloudera Enterprise Data Hub.Db2.Couchbase Server.</p>
          </div>
        </div>
        </div>


        <div className='mt-8'>
        <div className="title">
          <h3 className='text-3xl font-semibold italic'>How does the private route work?</h3>
          <div className="description">
          <p className='font-semibold italic'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
          </div>
        </div>
        </div>


        <div className='mt-8'>
        <div className="title">
          <h3 className='text-3xl font-semibold italic'>What is Node? How does Node work?</h3>
          <div className="description">
          <p className='font-semibold italic'>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;