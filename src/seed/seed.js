import React from "react";

class Seed extends React.Component {
  loadTrip = index => {
    this.props.db
      .collection("trips")
      .add({
        city: trips[index].city,
        country: trips[index].country,
        temperature: trips[index].temperature,
        weather: trips[index].weather,
        weatherIcon: trips[index].weatherIcon,
        dateStart: trips[index].dateStart,
        dateEnd: trips[index].dateEnd,
        place1: trips[index].place1,
        place2: trips[index].place2,
        place3: trips[index].place3,
        place4: trips[index].place4
      })
      .then(data => {
        // If there is still data in the Queue
        // Call this function again
        // else Quit
        console.log("loaded one record...");
        console.log(data);
        if (index > 0) {
          index--;
          this.loadTrip(index);
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  componentDidMount() {
    // Load all the trips in the trips array
    let tripIndex = trips.length - 1;
    if (tripIndex > 0) {
      this.loadTrip(tripIndex);
    }
  }

  render() {
    return (
      <div className="container">
        <h3>Run the Seed function to setup the database</h3>
      </div>
    );
  }
}

export default Seed;

const trips = [
  {
    city: "Santiago",
    country: "Chile",
    temperature: 50.55,
    weather: "Sunny",
    weatherIcon: "04d",
    dateStart: "06 March 2019",
    dateEnd: "06 March 2019",
    place1: "Beans",
    place2: "Potatoes",
    place3: "Chicken",
    place4: "Ice Cream"
  },
  {
    city: "Cairo",
    country: "Egypt",
    temperature: 2.44,
    weather: "Sunny",
    weatherIcon: "04d",
    dateStart: "06 March 2019",
    dateEnd: "06 March 2019",
    place1: "Beans",
    place2: "Potatoes",
    place3: "Chicken",
    place4: "Ice Cream"
  },
  {
    city: "Beijing",
    country: "China",
    temperature: 10.55,
    weather: "Sunny",
    weatherIcon: "04d",
    dateStart: "06 March 2019",
    dateEnd: "06 March 2019",
    place1: "Beans",
    place2: "Potatoes",
    place3: "Chicken",
    place4: "Ice Cream"
  },
  {
    city: "Darwin",
    country: "Australia",
    temperature: 28.88,
    weather: "Sunny",
    weatherIcon: "04d",
    dateStart: "06 March 2019",
    dateEnd: "06 March 2019",
    place1: "Beans",
    place2: "Potatoes",
    place3: "Chicken",
    place4: "Ice Cream"
  }
];
