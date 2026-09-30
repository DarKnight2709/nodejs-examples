// A generator function simulating async behavior with yield
function* sampleGenerator() {
  const user = yield getUser(1);       // Pauses here until resolved
  const posts = yield getPosts(user.id); // Pauses here until resolved
  console.log(posts);
}