from rest_framework import serializers
from .models import Movie

class MovieSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Movie
        fields = ('id', 'title', 'genre', 'description', 'owner')