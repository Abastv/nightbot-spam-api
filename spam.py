from flask import Request, Response

def handler(request: Request) -> Response:
    word = request.args.get("word", "SPAM")
    count = int(request.args.get("count", 1))
    if count > 50:
        count = 50
    result = "\n".join([word] * count)
    return Response(result, mimetype="text/plain")
