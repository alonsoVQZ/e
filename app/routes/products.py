from flask import Blueprint, request, jsonify
from app.models import db, Product

products = Blueprint('products', __name__)

@products.route('/search', methods=['POST'])
def products_search():
    data = request.json
    response = Product.query.filter(Product.name.contains(data["data"])).all()
    if response:
        products = [product.data() for product in response]
        return products
    return { "error": "Product not found" }