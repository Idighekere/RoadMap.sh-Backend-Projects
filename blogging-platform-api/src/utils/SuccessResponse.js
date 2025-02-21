export const SuccessResponse = (res, statusCode, data) => {

    res.status(statusCode).json({
        status: 'success',
        data,
    })
}
