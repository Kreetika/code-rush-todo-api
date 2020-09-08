import * as userService from "../services/user";

/**
 * Controller to get all the users.
 *
 * @param  req
 * @param  res
 * @param  next
 */
export function getAllUsers(req, res, next) {
  userService
    .getAllUsers()
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get a particular user by id.
 *
 * @param  req
 * @param  res
 * @param  next
 */
export function getUserById(req, res, next) {
  userService
    .getUserById(+req.params.userId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to create a new user.
 *
 * @param  req
 * @param  res
 * @param  next
 */
export function createUser(req, res, next) {
  userService
    .createUser(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to remove an existing user.
 *
 * @param  req
 * @param  res
 * @param  next
 */
export function deleteUser(req, res, next) {
  userService
    .deleteUser(+req.params.userId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to update the details of a user.
 *
 * @param  req
 * @param  res
 * @param  next
 */
export function updateUser(req, res, next) {
  userService
    .updateUser(+req.params.userId, req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
