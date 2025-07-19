import { getAllUsers, getAllPosts } from '@/lib/db-utils';

export default async function Dashboard() {
  let users = [];
  let posts = [];
  let error = null;

  try {
    users = await getAllUsers();
    posts = await getAllPosts();
  } catch (err) {
    error = 'Failed to load data. Make sure the database is set up.';
    console.error('Dashboard error:', err);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Users Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Users ({users.length})</h2>
          {users.length > 0 ? (
            <div className="space-y-2">
              {users.map((user) => (
                <div key={user.id} className="border-b pb-2">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-gray-600 text-sm">{user.email}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No users found</p>
          )}
        </div>

        {/* Posts Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Posts ({posts.length})</h2>
          {posts.length > 0 ? (
            <div className="space-y-2">
              {posts.map((post) => (
                <div key={post.id} className="border-b pb-2">
                  <p className="font-medium">{post.title}</p>
                  <p className="text-gray-600 text-sm">
                    {post.published ? 'Published' : 'Draft'}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No posts found</p>
          )}
        </div>
      </div>

      {/* API Testing Section */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">API Testing</h2>
        <div className="space-y-2 text-sm">
          <p><strong>GET /api/users</strong> - Fetch all users</p>
          <p><strong>POST /api/users</strong> - Create a new user</p>
          <p><strong>GET /api/posts</strong> - Fetch all posts</p>
          <p><strong>POST /api/posts</strong> - Create a new post</p>
        </div>
      </div>
    </div>
  );
}