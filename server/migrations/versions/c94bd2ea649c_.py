"""empty message

Revision ID: c94bd2ea649c
Revises: aa0a14ee3772
Create Date: 2023-10-19 14:39:55.416500

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c94bd2ea649c'
down_revision = 'aa0a14ee3772'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('posts', schema=None) as batch_op:
        batch_op.add_column(sa.Column('favorited', sa.Boolean(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('posts', schema=None) as batch_op:
        batch_op.drop_column('favorited')

    # ### end Alembic commands ###
