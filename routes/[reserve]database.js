var Models = require("../models");
var Sequelize = require("sequelize");
var Op = Sequelize.Op;

/* Get One Object from Cinema Model that have column 'CinemaId'*/
exports.getCinemaById = (id, callback) => {
  Models.Cinema.findOne({
    where: {
      [Op.and]: [{ cinemaId: id }]
    },
    limit: 10
  })
    .then(result => {
      //Queru Success
      return callback(null, result);
    })
    .catch(err => {
      //Exception
      return callback(err, false);
    });
};

exports.getSchedules = callback => {
  Models.Schedule.findAll({
    subQuery: false,
    include: [
      {
        model: Models.Movie,
        as: "movieIdSchedule"
      },
      {
        model: Models.ShowRoom,
        as: "cineIdRoomSche"
      }
    ]
  })
    .then(result => {
      console.log("getting schedules...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};

exports.getSchedulesbyMovie = (id, callback) => {
  Models.Schedule.findAll({
    subQuery: false,
    where: {
      [Op.and]: [{ movieId: id }]
    },
    include: [
      {
        model: Models.Movie,
        as: "movieIdSchedule"
      },
      {
        model: Models.ShowRoom,
        as: "cineIdRoomSche"
      }
    ]
  })
    .then(result => {
      console.log("getting schedules by movie...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};

exports.getSchedulesbyCinema = (id, callback) => {
  Models.Schedule.findAll({
    subQuery: false,
    where: {
      [Op.and]: [{ cinemaId: id }]
    },
    include: [
      {
        model: Models.Movie,
        as: "movieIdSchedule"
      },
      {
        model: Models.ShowRoom,
        as: "cineIdRoomSche"
      }
    ]
  })
    .then(result => {
      console.log("getting schedules by cinema...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};

exports.getSchedulesbyDate = (id, callback) => {
  Models.Schedule.findAll({
    subQuery: false,
    where: {
      [Op.and]: [{ screeningDate: id }]
    },
    include: [
      {
        model: Models.Movie,
        as: "movieIdSchedule"
      },
      {
        model: Models.ShowRoom,
        as: "cineIdRoomSche"
      }
    ]
  })
    .then(result => {
      console.log("getting schedules by date...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};

exports.getSchedulesbyCinemaMovie = (cinema, movie, callback) => {
  Models.Schedule.findAll({
    subQuery: false,
    where: {
      [Op.and]: [{ cinemaId: cinema }, { movieId: movie }]
    },
    include: [
      {
        model: Models.Movie,
        as: "movieIdSchedule"
      },
      {
        model: Models.ShowRoom,
        as: "cineIdRoomSche"
      }
    ]
  })
    .then(result => {
      console.log("getting schedules by cinema and movie...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};

exports.getSchedulesbyCinemaDate = (cinema, date, callback) => {
  Models.Schedule.findAll({
    subQuery: false,
    where: {
      [Op.and]: [{ cinemaId: cinema }, { screeningDate: date }]
    },
    include: [
      {
        model: Models.Movie,
        as: "movieIdSchedule"
      },
      {
        model: Models.ShowRoom,
        as: "cineIdRoomSche"
      }
    ]
  })
    .then(result => {
      console.log("getting schedules by cinema and movie...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};

exports.getSchedulesbyMovieDate = (movie, date, callback) => {
  Models.Schedule.findAll({
    subQuery: false,
    where: {
      [Op.and]: [{ movieId: movie }, { screeningDate: date }]
    },
    include: [
      {
        model: Models.Movie,
        as: "movieIdSchedule"
      },
      {
        model: Models.ShowRoom,
        as: "cineIdRoomSche"
      }
    ]
  })
    .then(result => {
      console.log("getting schedules by cinema and movie...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};

exports.getSchedulesbyCinemaMovieDate = (cinema, movie, date, callback) => {
  Models.Schedule.findAll({
    subQuery: false,
    where: {
      [Op.and]: [
        { cinemaId: cinema },
        { movieId: movie },
        { screeningDate: date }
      ]
    },
    include: [
      {
        model: Models.Movie,
        as: "movieIdSchedule"
      },
      {
        model: Models.ShowRoom,
        as: "cineIdRoomSche"
      }
    ]
  })
    .then(result => {
      console.log("getting schedules by cinema and movie...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};

exports.getTicketsTaken = (cinema, movie, date, time, callback) => {
  Models.Ticket.findAll({
    subQuery: false,
    where: {
      [Op.and]: [
        { cinemaId: cinema },
        { movieId: movie },
        { screeningDate: date },
        { screeningTime: time }
      ]
    }
  })
    .then(result => {
      console.log("getting tickets...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};

exports.confirmTickets = (cinema, movie, date, time, seat, callback) => {
  Models.Ticket.create({
    cinemaId: cinema,
    movieId: movie,
    screeningDate: date,
    screeningTime: time,
    seatNumber: seat
  })
    .then(result => {
      console.log("adding to tickets...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};

exports.getUserbyIdPW = (id, pw, callback) => {
  Models.Customer.findAll({
    subQuery: false,
    where: {
      [Op.and]: [
        { customerId: id }
        // , {customerPW: pw}
      ]
    }
  })
    .then(result => {
      console.log("getting customers...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};

exports.getWorkers = callback => {
  Models.Worker.findAll()
    .then(result => {
      console.log("getting schedules...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};

exports.getWorkersbyId = (id, callback) => {
  Models.Schedule.findAll({
    subQuery: false,
    where: {
      [Op.and]: [{ empId: id }]
    }
  })
    .then(result => {
      console.log("getting workers...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};

exports.getWorkersbyDep = (dep, callback) => {
  Models.Worker.findAll({
    subQuery: false,
    where: {
      [Op.and]: [{ depId: dep }]
    }
  })
    .then(result => {
      console.log("getting workers...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};

exports.getWorkersbyName = (name, callback) => {
  Models.Worker.findAll({
    subQuery: false,
    where: {
      [Op.and]: [{ empName: name }]
    }
  })
    .then(result => {
      console.log("getting workers...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};

exports.getWorkersbyPos = (pos, callback) => {
  Models.Worker.findAll({
    subQuery: false,
    where: {
      [Op.and]: [{ empPosition: pos }]
    }
  })
    .then(result => {
      console.log("getting workers...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};

exports.getWorkersbyCin = (cinema, callback) => {
  Models.Worker.findAll({
    subQuery: false,
    where: {
      [Op.and]: [{ cinemaId: cinema }]
    }
  })
    .then(result => {
      console.log("getting workers...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};

exports.getWorkersbyDepPos = (dep, pos, callback) => {
  Models.Worker.findAll({
    subQuery: false,
    where: {
      [Op.and]: [{ empDepartment: dep }, { empPosition: pos }]
    }
  })
    .then(result => {
      console.log("getting workers...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};

exports.getWorkersbyDepCin = (dep, cinema, callback) => {
  Models.Worker.findAll({
    subQuery: false,
    where: {
      [Op.and]: [{ empDepartment: dep }, { cinemaId: cinema }]
    }
  })
    .then(result => {
      console.log("getting workers...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};

exports.getWorkersbyPosCin = (pos, cinema, callback) => {
  Models.Worker.findAll({
    subQuery: false,
    where: {
      [Op.and]: [{ empPosition: pos }, { cinemaId: cinema }]
    }
  })
    .then(result => {
      console.log("getting workers...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};

exports.getWorkersbyDepPos = (dep, position, callback) => {
  Models.Worker.findAll({
    subQuery: false,
    where: {
      [Op.and]: [{ empDepartment: dep }, { empPosition: position }]
    }
  })
    .then(result => {
      console.log("getting workers...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};

exports.getWorkersbyDepPosCin = (dep, position, cinema, callback) => {
  Models.Worker.findAll({
    subQuery: false,
    where: {
      [Op.and]: [
        { empDepartment: dep },
        { empPosition: position },
        { cinemaId: cinema }
      ]
    }
  })
    .then(result => {
      console.log("getting workers...");
      return callback(null, result);
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      return callback(err, false);
    });
};
