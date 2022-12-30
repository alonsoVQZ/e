from flask import Blueprint


products = Blueprint('products', __name__)


# Create Product
@products.route('/', methods=['POST'])
def create_product():
    return { "product": product_id }


# Get Product by Id
@products.route('/<int:product_id>', methods=['GET'])
def get_product(product_id):
    return { "product": product_id }


# Delete Product by Id
@products.route('/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    return { "product": product_id }


# Edit Product by Id
@products.route('/<int:product_id>', methods=['PUT'])
def edit_product(product_id):
    return { "product": product_id }