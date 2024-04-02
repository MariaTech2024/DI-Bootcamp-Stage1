//Daily challenge : Creating Objects
//Create a class named Video. The class should be constructed with the following parameters: title, uploader, time 

class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
//Create a method called watch() which displays a string as follows
    watch() {
        return `${this.uploader} watched all ${this.time} seconds of ${this.title}!`;
    }
}

//Instantiate a new Video instance and call the watch() method.
const video1 = new Video('My First Video', 'Peter', 180);
console.log(video1.watch());  // Output: Peter watched all 180 seconds of My First Video!

//Instantiate a second Video instance with different values.
const video2 = new Video('My Second Video', 'Andrew', 150);
console.log(video2.watch());  // Output: Andrew watched all 150 seconds of My Second Video!

//Use an array to store data for five Video instances (ie. title, uploader, time)
const videoData = [
    { title: 'Video 1', uploader: 'John', time: 60 },
    { title: 'Video 2', uploader: 'David', time: 120 },
    { title: 'Video 3', uploader: 'Charlotte', time: 240 },
    { title: 'Video 4', uploader: 'Alex', time: 360 },
    { title: 'Video 5', uploader: 'Jessica', time: 740 }
];

//Loop through the array to instantiate those instances.
const videoInstances = videoData.map(data => new Video(data.title, data.uploader, data.time));

videoInstances.forEach(video => console.log(video.watch()));
