import ApiError from "./apiError";

function apiErrorHandler(err, req, res, next) {
    if (err instanceof ApiError) {
        res.status(err.status).json(err.message)
    }

    res.status(500).json('Something went wrong')
}

export default apiErrorHandler