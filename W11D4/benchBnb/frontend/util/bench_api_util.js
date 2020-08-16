export const fetchBenches = () => (
    $.ajax({
        url: '/api/benches',
        method: 'GET'
    })
)

