function getProfileDetails(user, func) {
  console.log("Profile Data Fetching...");

  setTimeout(() => {
    func({
      user_id: "crazy_123",
      FullName: "Om Dwivedi",
      Age: "20",
      Follower: "20,000",
    });
  }, 3000);
}

function getALLPost(user_id, func) {
  console.log("All Post data Fetching...");

  setTimeout(() => {
    func(
      (AllPosts = ["Monday ka post", "Tuesday ka Post", "Wednesday ka post"]),
    );
  }, 4000);
}

function getSavedPosts(data, func) {
  console.log("Saved Posts fetching...");

  setTimeout(()=>{
    func((savedPosts = ["Monday ka post", "Tuesday ka Post"]));
  }, 4000)
}

document.querySelector("button").addEventListener("click", () => {
  getProfileDetails("Om", function (data) {
    console.log(data);

    getALLPost(data.user_id, function (data1) {
      console.log(data1);

      getSavedPosts(data.user_id, function (data2) {
        console.log(data2);

      });
    });
  });
});
