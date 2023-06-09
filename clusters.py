import math
import random
from sklearn.cluster import KMeans


def euclidean_dist(p1, p2):
    sum = math.sqrt((p1[0] - p2[0])**2 + (p1[1] - p2[1])**2)
    return sum

def get_clusters(points):
    """
    Grouping up to 12 people by distance to create pickup or drop-off stations
    """
    max_cluster_size = 12
  
    # Calculate the distance between each pair of coordinates.
    distances = []
    for i in range(len(points)):
        distances.append([])
        for j in range(len(points)):
            distances[i].append(euclidean_dist(points[i], points[j]))

    kmeans = KMeans(n_clusters=len(points)//max_cluster_size+1,
                    random_state=0, n_init="auto").fit(distances)

    # Get the cluster labels for each coordinate
    labels = kmeans.labels_
    
    # Create a list of clusters
    clusters = []
    for label in set(labels):
        clusters.append([points[i] for i, l in enumerate(labels) if l == label])
    cent_dist = kmeans.cluster_centers_
    
    # Split clusters bigger than 12
    c_clust = len(clusters)
    while c_clust > 0:
        c_clust -= 1
        clust = clusters[c_clust]
        if len(clust) > 12:
            n_distances = []
            for i in range(len(clust)):
                n_distances.append([])
                for j in range(len(clust)):
                    n_distances[i].append(euclidean_dist(clust[i], clust[j]))
            split = len(clust)//12 + 1
            n_kmeans = KMeans(n_clusters=split, random_state=0, n_init="auto").fit(n_distances)
            n_labels = n_kmeans.labels_
            
            # Update a list of clusters
            for label in set(n_labels):
                clusters.append([points[i] for i, l in enumerate(n_labels) if l == label])

            clusters.remove(clust)
            c_clust = len(clusters)
            continue
    return clusters

if __name__ == "__main__":
        
    points = [(32 + random.random(), 34 + random.random()) for i in range(1000)]

    clustered_addresses = get_clusters(points)
    print(clustered_addresses)